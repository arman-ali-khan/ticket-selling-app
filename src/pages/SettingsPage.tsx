import { Button } from '../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';
import { Switch } from '../components/ui/switch';
import { Textarea } from '../components/ui/textarea';
import { Copy, Save, RefreshCw } from 'lucide-react';

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-500">Manage your system settings and preferences.</p>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Configure general system settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="siteName">Site Name</Label>
                <Input id="siteName" defaultValue="Lottery Admin Dashboard" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="siteUrl">Site URL</Label>
                <Input id="siteUrl" defaultValue="https://lottery-admin.example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="utc">
                  <SelectTrigger>
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc">UTC</SelectItem>
                    <SelectItem value="est">Eastern Time (EST)</SelectItem>
                    <SelectItem value="cst">Central Time (CST)</SelectItem>
                    <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                    <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="maintenance" />
                <Label htmlFor="maintenance">Maintenance Mode</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="security" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Configure security settings for your system.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="twoFactor">Two-Factor Authentication</Label>
                <div className="flex items-center space-x-2">
                  <Switch id="twoFactor" defaultChecked />
                  <Label htmlFor="twoFactor">Require for all admin users</Label>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                <Input id="sessionTimeout" type="number" defaultValue="30" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="passwordPolicy">Password Policy</Label>
                <Select defaultValue="strong">
                  <SelectTrigger>
                    <SelectValue placeholder="Select policy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic (8+ characters)</SelectItem>
                    <SelectItem value="medium">Medium (8+ chars, letters & numbers)</SelectItem>
                    <SelectItem value="strong">Strong (8+ chars, uppercase, lowercase, numbers)</SelectItem>
                    <SelectItem value="very-strong">Very Strong (12+ chars, uppercase, lowercase, numbers, symbols)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Login Restrictions</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="ipRestriction" />
                    <Label htmlFor="ipRestriction">IP Address Restriction</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="failedAttempts" defaultChecked />
                    <Label htmlFor="failedAttempts">Lock account after 5 failed attempts</Label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Configure how and when you receive notifications.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Email Notifications</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="userRegistration" defaultChecked />
                    <Label htmlFor="userRegistration">New user registrations</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="largeTransactions" defaultChecked />
                    <Label htmlFor="largeTransactions">Large transactions</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="systemAlerts" defaultChecked />
                    <Label htmlFor="systemAlerts">System alerts</Label>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="emailFrom">Email From Address</Label>
                <Input id="emailFrom" defaultValue="admin@lottery-system.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emailService">Email Service</Label>
                <Select defaultValue="smtp">
                  <SelectTrigger>
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="smtp">SMTP</SelectItem>
                    <SelectItem value="sendgrid">SendGrid</SelectItem>
                    <SelectItem value="mailchimp">Mailchimp</SelectItem>
                    <SelectItem value="ses">Amazon SES</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="api" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>API Settings</CardTitle>
              <CardDescription>
                Manage API keys and access settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="apiKey">API Key</Label>
                  <Button variant="outline" size="sm" className="h-8">
                    <RefreshCw className="h-3.5 w-3.5 mr-1" />
                    Generate New
                  </Button>
                </div>
                <div className="flex space-x-2">
                  <Input id="apiKey" defaultValue="sk_live_51JGh3KLmTwAGRXXXXXXXXXXXX" readOnly className="font-mono" />
                  <Button variant="outline" size="sm" className="shrink-0">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-gray-500">This key provides full access to your API. Keep it secure!</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="apiAccess">API Access Control</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="enableApi" defaultChecked />
                    <Label htmlFor="enableApi">Enable API access</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="rateLimit" defaultChecked />
                    <Label htmlFor="rateLimit">Enable rate limiting</Label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="allowedOrigins">Allowed Origins (CORS)</Label>
                <Textarea 
                  id="allowedOrigins" 
                  placeholder="https://example.com, https://app.example.com"
                  defaultValue="https://lottery-app.example.com"
                />
                <p className="text-xs text-gray-500">Enter comma-separated domains that are allowed to access your API</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="webhookUrl">Webhook URL</Label>
                <Input id="webhookUrl" placeholder="https://your-server.com/webhook" />
                <p className="text-xs text-gray-500">We'll send event notifications to this URL</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save API Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;