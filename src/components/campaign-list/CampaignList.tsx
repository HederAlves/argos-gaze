import React from 'react';
import styled from 'styled-components';
import { AdCampaign } from '../Ad-campaigns/AdCampaigns';

interface AdCampaignListProps {
    campaigns: AdCampaign[];
}

const AdCampaignListContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap; /* Adicione essa propriedade */
    max-width: 1200px; /* Adicione essa propriedade */
    margin: 15px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: #ccc #f0f0f0; 
    gap: 20px;
    padding: 20px; /* Adicione essa propriedade */
`;

const AdCampaignCard = styled.div`
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    flex-grow: 1; /* Adicione essa propriedade */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 16px; /* Adicione essa propriedade */

    h2 {
        margin-top: 0;
        font-size: 1.5em;
    }

    p {
        margin: 0;
    }

    strong {
        font-weight: bold;
    }
`;

const CampaignList: React.FC<AdCampaignListProps> = ({ campaigns }) => {
    return (
        <AdCampaignListContainer>
            {campaigns.map(campaign => (
                <AdCampaignCard key={campaign.id}>
                    <div style={{ background: '#f8f9fa', textAlign: 'center', paddingTop: '10px' }}>
                        <h2>{campaign.outdoors}</h2>
                    </div>
                    <div style={{ padding: '0px 16px 16px', height: '140px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
                        <p><strong>Campanha:</strong> {campaign.name}</p>
                        <p><strong>Empresa Responsável:</strong> {campaign.responsible_company}</p>
                        <p><strong>Cidade:</strong> {campaign.city}</p>
                        <p><strong>Endereço:</strong> {campaign.address}</p>
                    </div>
                </AdCampaignCard>
            ))}
        </AdCampaignListContainer>
    );
};

export default CampaignList;
