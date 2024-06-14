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
    min-height: 100vh;
`;

const Navbar = styled.nav`
    display: flex;
    justify-content: start;
    gap: 50px;
    align-items: center;
    background-color: #343a40;
    padding: 10px 20px;
    color: white;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;

    @media (max-width: 768px) {
        justify-content: start;
        gap: 50px;
    }
`;

const NavbarNav = styled.ul`
    display: flex;
    padding: 0;
    list-style: none;

    @media (max-width: 768px) {
        display: none;
    }
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

const HamburgerButton = styled.button`
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block;
    }
`;

const Sidebar = styled.aside<{ isOpen: boolean }>`
    width: ${props => (props.isOpen ? '200px' : '150px')};
    background-color: #f8f9fa;
    height: 100vh;
    position: fixed;
    z-index: 999;
    top: 60px;
    left: 0;
    padding-top: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    transition: width 0.3s ease;

    @media (max-width: 768px) {
        width: ${props => (props.isOpen ? '200px' : '0')};
        overflow: hidden;
    }
`;

const SidebarNav = styled.ul`
    list-style: none;
    padding: 0;
    text-align: center;

    @media (max-width: 768px) {
        text-align: left;
    }
`;

const SidebarItem = styled.li`
    padding: 15px 20px;
    a {
        color: #343a40;
        text-decoration: none;
        padding: 10px;
        font-size: 18px;
        display: block;

        &:hover {
            background-color: #e9ecef;
            border-radius: 4px;
        }
    }

    @media (max-width: 768px) {
        padding: 10px 10px;
        a {
            font-size: 14px;
        }
    }
`;

const MainContent = styled.main<{ isSidebarOpen: boolean }>`
    margin-left: ${props => (props.isSidebarOpen ? '220px' : '60px')};
    margin-top: 80px;
    margin-bottom: 10px;
    background-color: #ffffff;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 18px 10px 0px 20px;
    width: calc(100% - ${props => (props.isSidebarOpen ? '220px' : '60px')});
    transition: margin-left 0.3s ease, width 0.3s ease;

    @media (max-width: 768px) {
        margin-left: 0;
        width: 100%;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-around;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Home: React.FC = () => {
    const [campaigns, setCampaigns] = useState<AdCampaign[]>([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

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
                <HamburgerButton onClick={toggleSidebar}>
                    &#9776;
                </HamburgerButton>
                <img width={'200px'} src={nave_logo} alt="Descrição da Imagem" />
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
            <Sidebar isOpen={isSidebarOpen}>
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
            <MainContent isSidebarOpen={isSidebarOpen}>
                <h1 style={{ paddingBottom: '10px', textAlign: 'center' }}>Resultado dos seus Anúncios</h1>
                <ContentContainer>
                    <Dashboard campaigns={campaigns} />
                    <CampaignList campaigns={campaigns} />
                </ContentContainer>
            </MainContent>
        </Container>
    );
};

export default Home;
