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
  Users2,
  Search,
  Plus,
  DollarSign,
  UserPlus,
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
const affiliates = [
  { id: 1, name: 'John Doe', referrals: 45, commission: 2250, status: 'Active', joinDate: '2023-05-15' },
  { id: 2, name: 'Jane Smith', referrals: 32, commission: 1600, status: 'Active', joinDate: '2023-06-20' },
  { id: 3, name: 'Bob Johnson', referrals: 18, commission: 900, status: 'Inactive', joinDate: '2023-04-10' },
  { id: 4, name: 'Alice Brown', referrals: 27, commission: 1350, status: 'Active', joinDate: '2023-07-05' },
  { id: 5, name: 'Charlie Davis', referrals: 12, commission: 600, status: 'Active', joinDate: '2023-08-12' },
];

const AffiliatesPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Affiliate Management</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Affiliate
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Affiliates</CardTitle>
            <Users2 className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">134</div>
            <p className="text-xs text-gray-500">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>
            <UserPlus className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,245</div>
            <p className="text-xs text-gray-500">+18% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Commission</CardTitle>
            <DollarSign className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$62,250</div>
            <p className="text-xs text-gray-500">+15% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search affiliates..."
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
              <TableHead>Referrals</TableHead>
              <TableHead>Commission</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {affiliates.map((affiliate) => (
              <TableRow key={affiliate.id}>
                <TableCell>{affiliate.id}</TableCell>
                <TableCell className="font-medium">{affiliate.name}</TableCell>
                <TableCell>{affiliate.referrals}</TableCell>
                <TableCell>${affiliate.commission}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      affiliate.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {affiliate.status}
                  </span>
                </TableCell>
                <TableCell>{affiliate.joinDate}</TableCell>
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
                      <DropdownMenuItem>Edit affiliate</DropdownMenuItem>
                      <DropdownMenuItem>View referrals</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className={affiliate.status === 'Active' ? 'text-red-600' : 'text-green-600'}>
                        {affiliate.status === 'Active' ? 'Deactivate' : 'Activate'}
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

export default AffiliatesPage;