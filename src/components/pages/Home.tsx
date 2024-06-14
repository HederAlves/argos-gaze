import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ref, get, child } from "firebase/database";
import { database } from '../../../firebase';
import Dashboard from '../dashboard/Dashboard';
import nave_logo from '/logo-argos-gaze.jpg';
import { AdCampaign } from '../Ad-campaigns/AdCampaigns';
import CampaignList from '../campaign-list/CampaignList';

const Container = styled.div`
    display: flex;
    background-color: #f1f1f1;
`;

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #343a40;
    padding: 10px 10px;
    color: white;
    position: fixed;
    width: 99%;
    top: 0;
    z-index: 1000;
`;

const NavbarNav = styled.ul`
    display: flex;
    padding: 0px 20px;
`;

const NavItem = styled.li`
    margin-left: 20px;
    a {
        color: white;
        text-decoration: none;
        font-size: 18px;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const Sidebar = styled.aside`
    width: 200px;
    background-color: #f8f9fa;
    height: 100vh;
    position: fixed;
    top: 60px;
    left: 0;
    padding-top: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const SidebarNav = styled.ul`
    list-style: none;
    padding: 0;
`;

const SidebarItem = styled.li`
    padding: 15px 20px;
    a {
        color: #343a40;
        text-decoration: none;
        font-size: 18px;
        display: block;

        &:hover {
            background-color: #e9ecef;
            border-radius: 4px;
        }
    }
`;

const MainContent = styled.main`
    margin-top: 80px;
    margin-bottom: 10px;
    background-color: #ffffff;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;

const Home: React.FC = () => {
    const [campaigns, setCampaigns] = useState<AdCampaign[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const dbRef = ref(database);
            const snapshot = await get(child(dbRef, 'adCampaigns'));

            if (snapshot.exists()) {
                const data = snapshot.val();
                const campaignsArray: AdCampaign[] = [];

                for (const key in data) {
                    const campaignData = data[key];
                    const campaign: AdCampaign = {
                        id: key,
                        name: campaignData.name,
                        outdoors: campaignData.outdoors,
                        location: campaignData.location,
                        responsible_company: campaignData.responsible_company,
                        number_views: campaignData.number_views,
                        advertising_name: campaignData.name,
                        address: campaignData.address,
                        city: campaignData.city
                    };
                    campaignsArray.push(campaign);
                }

                console.log('Campaigns:', campaignsArray);
                setCampaigns(campaignsArray);
            } else {
                console.log("No data available");
            }
        };
        fetchData();
    }, []);

    return (
        <Container>
            <Navbar>
                <img width={'10%'} src={nave_logo} alt="Descrição da Imagem" />
                <NavbarNav>
                    <NavItem>
                        <a href="#home">Home</a>
                    </NavItem>
                    <NavItem>
                        <a href="#about">About</a>
                    </NavItem>
                    <NavItem>
                        <a href="#contact">Contact</a>
                    </NavItem>
                </NavbarNav>
            </Navbar>
            <Sidebar>
                <SidebarNav>
                    <SidebarItem>
                        <a href="#dashboard">Dashboard</a>
                    </SidebarItem>
                    <SidebarItem>
                        <a href="#campaigns">Campaigns</a>
                    </SidebarItem>
                    <SidebarItem>
                        <a href="#reports">Reports</a>
                    </SidebarItem>
                    <SidebarItem>
                        <a href="#settings">Settings</a>
                    </SidebarItem>
                </SidebarNav>
            </Sidebar>
            <div style={{ display: 'flex' }}>
                <MainContent style={{ marginLeft: '220px', padding: '18px 10px 0px 20px', }}>
                    <h1 style={{ paddingBottom: '10px', textAlign: 'center' }}>Resultado dos seus Anúncios</h1>
                    <Dashboard campaigns={campaigns} />
                </MainContent>
                <MainContent style={{ marginLeft: '18px', marginRight: '10px' }}>
                    <CampaignList campaigns={campaigns} />
                </MainContent>
            </div>
        </Container>
    );
};

export default Home;
