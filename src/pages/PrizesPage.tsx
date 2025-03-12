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
  Gift,
  Search,
  Plus,
  Award,
  Users,
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
const prizes = [
  { id: 1, name: 'Grand Prize', value: 50000, type: 'Cash', winners: 1, event: 'Lottery Draw #123', date: '2023-10-15', status: 'Active' },
  { id: 2, name: 'Second Prize', value: 25000, type: 'Cash', winners: 2, event: 'Lottery Draw #123', date: '2023-10-15', status: 'Active' },
  { id: 3, name: 'Third Prize', value: 10000, type: 'Cash', winners: 3, event: 'Lottery Draw #123', date: '2023-10-15', status: 'Active' },
  { id: 4, name: 'Luxury Car', value: 75000, type: 'Physical', winners: 1, event: 'Lottery Draw #124', date: '2023-10-22', status: 'Scheduled' },
  { id: 5, name: 'Vacation Package', value: 15000, type: 'Experience', winners: 2, event: 'Lottery Draw #124', date: '2023-10-22', status: 'Scheduled' },
];

const PrizesPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Prize Management</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Prize
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Prizes</CardTitle>
            <Gift className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-gray-500">All time</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
            <Award className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,250,000</div>
            <p className="text-xs text-gray-500">All time</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Winners</CardTitle>
            <Users className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">125</div>
            <p className="text-xs text-gray-500">All time</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search prizes..."
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
              <TableHead>Value</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Winners</TableHead>
              <TableHead>Event</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {prizes.map((prize) => (
              <TableRow key={prize.id}>
                <TableCell>{prize.id}</TableCell>
                <TableCell className="font-medium">{prize.name}</TableCell>
                <TableCell>${prize.value.toLocaleString()}</TableCell>
                <TableCell>{prize.type}</TableCell>
                <TableCell>{prize.winners}</TableCell>
                <TableCell>{prize.event}</TableCell>
                <TableCell>{prize.date}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      prize.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : prize.status === 'Scheduled'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {prize.status}
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
                      <DropdownMenuItem>Edit prize</DropdownMenuItem>
                      <DropdownMenuItem>View winners</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className={prize.status === 'Active' ? 'text-red-600' : 'text-green-600'}>
                        {prize.status === 'Active' ? 'Deactivate' : 'Activate'}
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

export default PrizesPage;