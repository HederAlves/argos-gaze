import React, { useEffect, useState } from 'react';
import { ref, get, child } from "firebase/database";
import { database } from '../../../firebase';
import Dashboard from '../dashboard/Dashboard';

export interface NumberOfViews {
    hour: number;
    day: number;
    week: number;
    month: number;
}

export interface AdCampaign {
    address: string;
    city: string;
    advertising_name: string;
    id: string;
    name: string;
    outdoors: string;
    location: string;
    responsible_company: string;
    number_views: NumberOfViews;
}

const AdCampaigns: React.FC = () => {
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
        <div className="ad-campaigns">
            <h1>Suas Campanhas</h1>
            <Dashboard campaigns={campaigns} />
        </div>
    );
};

export default AdCampaigns;