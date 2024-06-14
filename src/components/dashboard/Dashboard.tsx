// Dashboard.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { AdCampaign } from '../Ad-campaigns/AdCampaigns';
import './style.css'

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface DashboardProps {
    campaigns: AdCampaign[];
}

const Dashboard: React.FC<DashboardProps> = ({ campaigns }) => {
    const campaignNames = campaigns.map(campaign => campaign.outdoors);
    const viewsPerHour = campaigns.map(campaign => campaign.number_views.hour);
    const viewsPerDay = campaigns.map(campaign => campaign.number_views.day);
    const viewsPerWeek = campaigns.map(campaign => campaign.number_views.week);
    const viewsPerMonth = campaigns.map(campaign => campaign.number_views.month);

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
        maintainAspectRatio: false,
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
        <div className="chart-container">
            <Bar data={data} options={options} />
        </div>
    );
};

export default Dashboard;
