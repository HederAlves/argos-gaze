import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { AdCampaign } from '../Ad-campaigns/AdCampaigns';
import { database } from '../../../firebase';
import { ref, update } from 'firebase/database';
import { styled } from 'styled-components';

export const Button = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 4px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 8px 2px 16px;
  cursor: pointer;
  transition-duration: 0.4s;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export const ResetButton = styled(Button)`
  background-color: #f44336;

  &:hover {
    background-color: white;
    color: black;
  }
`;

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface DashboardProps {
    campaigns: AdCampaign[];
}

const Dashboard: React.FC<DashboardProps> = ({ campaigns }) => {
    const [viewsPerHour, setViewsPerHour] = useState<number[]>([]);
    const [viewsPerDay, setViewsPerDay] = useState<number[]>([]);
    const [viewsPerWeek, setViewsPerWeek] = useState<number[]>([]);
    const [viewsPerMonth, setViewsPerMonth] = useState<number[]>([]);
    const [autoUpdate, setAutoUpdate] = useState<boolean>(false);

    useEffect(() => {
        setViewsPerHour(campaigns.map(campaign => campaign.number_views.hour));
        setViewsPerDay(campaigns.map(campaign => campaign.number_views.day));
        setViewsPerWeek(campaigns.map(campaign => campaign.number_views.week));
        setViewsPerMonth(campaigns.map(campaign => campaign.number_views.month));
    }, [campaigns]);

    useEffect(() => {
        if (autoUpdate) {
            const interval = setInterval(() => {
                const randomValue = Math.floor(Math.random() * 150);

                setViewsPerHour(prev => prev.map(value => value + randomValue));
                setViewsPerDay(prev => prev.map(value => value + randomValue));
                setViewsPerWeek(prev => prev.map(value => value + randomValue));
                setViewsPerMonth(prev => prev.map(value => value + randomValue));

                campaigns.forEach((campaign, index) => {
                    const campaignRef = ref(database, `adCampaigns/${campaign.id}`);
                    update(campaignRef, {
                        'number_views/hour': viewsPerHour[index] + randomValue,
                        'number_views/day': viewsPerDay[index] + randomValue,
                        'number_views/week': viewsPerWeek[index] + randomValue,
                        'number_views/month': viewsPerMonth[index] + randomValue
                    });
                });
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [autoUpdate, viewsPerHour, viewsPerDay, viewsPerWeek, viewsPerMonth, campaigns]);

    const handleReset = () => {
        setViewsPerHour(campaigns.map(campaign => campaign.number_views.hour));
        setViewsPerDay(campaigns.map(campaign => campaign.number_views.day));
        setViewsPerWeek(campaigns.map(campaign => campaign.number_views.week));
        setViewsPerMonth(campaigns.map(campaign => campaign.number_views.month));

        campaigns.forEach((campaign, index) => {
            const campaignRef = ref(database, `adCampaigns/${campaign.id}`);
            update(campaignRef, {
                'number_views/hour': campaigns[index].number_views.hour,
                'number_views/day': campaigns[index].number_views.day,
                'number_views/week': campaigns[index].number_views.week,
                'number_views/month': campaigns[index].number_views.month
            });
        });
    };

    const campaignNames = campaigns.map(campaign => campaign.outdoors);

    const data = {
        labels: campaignNames,
        datasets: [
            {
                label: 'Visualizações por hora',
                data: viewsPerHour,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: 'Visualizações por dia',
                data: viewsPerDay,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
            {
                label: 'Visualizações por semana',
                data: viewsPerWeek,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                label: 'Visualizações por mês',
                data: viewsPerMonth,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Visualizações de campanhas publicitárias',
            },
            legend: {
                display: true,
                position: 'top' as const,
                labels: {
                    boxWidth: 12,
                    padding: 10,
                    font: {
                        size: 12,
                    },
                },
            },
        },
    };

    return (
        <div className="chart-container" style={{ width: '780px' }}>
            <Bar data={data} options={options} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={() => setAutoUpdate(!autoUpdate)}>
                    {autoUpdate ? 'Desativar Câmera' : 'Ativar Câmera'}
                </Button>
                <ResetButton onClick={handleReset} style={{ marginLeft: '10px' }}>
                    Zerar valores
                </ResetButton>
            </div>
        </div>
    );
};

export default Dashboard;
