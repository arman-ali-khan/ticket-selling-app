import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import {
  Wallet,
  Search,
  Plus,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';

// Mock data
const funds = [
  { id: 1, name: 'Prize Pool', balance: 125000, type: 'Prize', lastTransaction: '2023-10-15', status: 'Active' },
  { id: 2, name: 'Operating Fund', balance: 45000, type: 'Operations', lastTransaction: '2023-10-14', status: 'Active' },
  { id: 3, name: 'Marketing Budget', balance: 35000, type: 'Marketing', lastTransaction: '2023-10-12', status: 'Active' },
  { id: 4, name: 'Reserve Fund', balance: 75000, type: 'Reserve', lastTransaction: '2023-10-10', status: 'Active' },
  { id: 5, name: 'Charity Fund', balance: 15000, type: 'Charity', lastTransaction: '2023-10-05', status: 'Inactive' },
];

const FundsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Funds Management</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create Fund
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Funds</CardTitle>
            <Wallet className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$295,000</div>
            <p className="text-xs text-gray-500">Across all accounts</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Deposits</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,000</div>
            <p className="text-xs text-gray-500">This month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Withdrawals</CardTitle>
            <ArrowDownRight className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$32,500</div>
            <p className="text-xs text-gray-500">This month</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search funds..."
            className="pl-8"
          />
        </div>
        <Button>Export</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Balance</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Last Transaction</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {funds.map((fund) => (
              <TableRow key={fund.id}>
                <TableCell>{fund.id}</TableCell>
                <TableCell className="font-medium">{fund.name}</TableCell>
                <TableCell>${fund.balance.toLocaleString()}</TableCell>
                <TableCell>{fund.type}</TableCell>
                <TableCell>{fund.lastTransaction}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      fund.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {fund.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Edit fund</DropdownMenuItem>
                      <DropdownMenuItem>Deposit</DropdownMenuItem>
                      <DropdownMenuItem>Withdraw</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className={fund.status === 'Active' ? 'text-red-600' : 'text-green-600'}>
                        {fund.status === 'Active' ? 'Deactivate' : 'Activate'}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default FundsPage;