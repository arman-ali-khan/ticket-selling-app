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
import { FileText, Search, Plus } from 'lucide-react';

// Mock data
const results = [
  { id: 1, event: 'Lottery Draw #123', date: '2023-10-15', winningNumbers: '12-34-45-56-78', winners: 3, status: 'Published' },
  { id: 2, event: 'Lottery Draw #122', date: '2023-10-08', winningNumbers: '05-16-27-38-49', winners: 2, status: 'Published' },
  { id: 3, event: 'Lottery Draw #121', date: '2023-10-01', winningNumbers: '11-22-33-44-55', winners: 5, status: 'Published' },
  { id: 4, event: 'Lottery Draw #124', date: '2023-10-22', winningNumbers: 'Pending', winners: 0, status: 'Scheduled' },
  { id: 5, event: 'Lottery Draw #125', date: '2023-10-29', winningNumbers: 'Pending', winners: 0, status: 'Scheduled' },
];

const ResultsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Results Management</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Result
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Results</CardTitle>
            <FileText className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">123</div>
            <p className="text-xs text-gray-500">All time</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Published Results</CardTitle>
            <FileText className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120</div>
            <p className="text-xs text-gray-500">All time</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Scheduled Results</CardTitle>
            <FileText className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-gray-500">Upcoming</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search results..."
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
              <TableHead>Event</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Winning Numbers</TableHead>
              <TableHead>Winners</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.map((result) => (
              <TableRow key={result.id}>
                <TableCell>{result.id}</TableCell>
                <TableCell>{result.event}</TableCell>
                <TableCell>{result.date}</TableCell>
                <TableCell>{result.winningNumbers}</TableCell>
                <TableCell>{result.winners}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      result.status === 'Published'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {result.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ResultsPage;