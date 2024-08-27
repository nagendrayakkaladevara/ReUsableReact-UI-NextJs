import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/shadcntabs"

export function TabsDemoTwo() {
    return (
        <Tabs defaultValue="account" className="w-full">
            <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Make changes to your account here.</TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
    )
}
