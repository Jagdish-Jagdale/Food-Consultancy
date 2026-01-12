import DashboardLayout from '../components/admin/DashboardLayout';
import {
    AIInsightCard,
    BalanceOverview,
    EarningsCard,
    TransactionsList,
    SpendingCard
} from '../components/admin/DashboardWidgets';

const AdminDashboard = () => {
    return (
        <DashboardLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 h-full pb-6">
                {/* Row 1 */}
                <div className="xl:col-span-1 h-[400px]">
                    <AIInsightCard />
                </div>
                <div className="xl:col-span-2 h-[400px]">
                    <BalanceOverview />
                </div>
                <div className="xl:col-span-1 h-[400px]">
                    <EarningsCard />
                </div>

                {/* Row 2 */}
                <div className="xl:col-span-3 h-[420px]">
                    <TransactionsList />
                </div>
                <div className="xl:col-span-1 h-[420px]">
                    <SpendingCard />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default AdminDashboard;
