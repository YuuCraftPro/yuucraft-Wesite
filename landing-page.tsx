import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 bg-foreground">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2 flex-1">
              <Icon icon="fa7-solid:zap" className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">yuuCraft HP</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium justify-center" />
          </div>
        </div>
      </header>
      <section className="relative overflow-hidden py-20 md:py-32 bg-foreground">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-t to-transparent blur-3xl rounded-t-full from-primary/50 translate-y-1/2 w-[80%] h-96" />
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <Badge
              variant="outline"
              className="px-4 py-1 bg-gradient-to-r from-primary/20 to-secondary/10 border-primary/30 hover:from-primary/30 hover:to-secondary/20 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <Icon icon="lucide:sparkles" className="w-3 h-3 mr-1 text-primary" />
              Powered by Advanced AI
            </Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight max-w-4xl text-background">
              My name is yuuCraft!!!
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              私はyuuCraftです！インターネット、主にDiscordで活動しております。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a rel="noopener noreferrer" href="https://discord.gg/eGYWNJqkQb" target="_blank">
                <Button size="lg" variant="outline" className="px-8">
                  Join Discord Server
                  <Icon icon="lucide:play" className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a rel="noopener noreferrer" href="https://lit.link/yuucraft" target="_blank">
                <Button size="lg" className="px-8">
                  詳しい自己紹介はこちらから
                  <Icon icon="lucide:arrow-right" className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
            <div className="flex flex-col items-center space-y-4 mt-10">
              <p className="text-sm text-muted-foreground">
                私は、長年のインターネットスキルを利用し、初心者かつ中立的な立場で皆様を支えます。
              </p>
              <div className="flex items-center space-x-8 opacity-60 flex-wrap justify-center gap-y-4 gap-x-[10px] mt-4">
                <div className="text-lg font-semibold">Microsoft</div>
                <div className="text-lg font-semibold">Shopify</div>
                <div className="text-lg font-semibold">Stripe</div>
                <div className="text-lg font-semibold">Notion</div>
                <div className="text-lg font-semibold">Slack</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="border-t bg-muted/50 py-20 md:py-32 border-foreground shadow-foreground bg-foreground"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">私の活動内容</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              私は主に、SNSで活動しております。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 md:col-span-2 lg:col-span-3">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon icon="bx:line-chart" className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  Discordサーバーの運営/スタッフ就任
                </h3>
                <p className="text-muted-foreground">
                  2025/10/26時点で、6サーバーで運営、3サーバーでスタッフとして管理を任されています。公平かつ安全なサーバーライフを楽しんでいただくよう、日々勉強しております。
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 md:col-span-2 lg:col-span-3">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon icon="lucide:puzzle" className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">大手SNSへの知識</h3>
                <p className="text-muted-foreground text-sm">
                  X、Facebook、TikTok、Instagram等、大手SNSの投稿などをしております。実際にあった投稿事故や、回避投稿などを見極めることができるよう、実例を見ながら勉強しております。
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 md:col-span-2 lg:col-span-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon icon="lucide:workflow" className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  自分のサーバー「Craft Studio」を所有
                </h3>
                <p className="text-muted-foreground">
                  Discord上の居場所を目指す、Craft
                  Studioを所有しております。皆様の参加を心よりお待ちしております。
                  https://discord.gg/eGYWNJqkQb{" "}
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 md:col-span-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon icon="lucide:puzzle" className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  荒らし組織に対する中立的な仲裁役を担当
                </h3>
                <p className="text-muted-foreground">
                  私は現在勢力を上げているいーじ帝国等と中立的な立場であり、平和かつ低被害なDiscordを提供するよう尽力しております。
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 md:col-span-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon icon="lucide:shield" className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  Discordに対する荒らしの知識
                </h3>
                <p className="text-muted-foreground">
                  まだ未熟ですが、Discordで荒らしを受けた経験を活かし、Discord上の荒らし被害をできるだけ軽減したいと思い、現在は荒らし対策などを自鯖で強化、他サーバーのサーバー所有者などの公演も行っております。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <footer className="py-16 border-t">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Icon icon="lucide:zap" className="h-8 w-8 text-primary" />
                <span className="font-bold text-xl">yuuCraft HP</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                このWebサイトは個人紹介Webサイトであり、フィルタリング回避、悪質取引等には使用されません。
              </p>
              <div className="flex space-x-4">
                <Button size="icon" variant="ghost">
                  <Icon icon="lucide:twitter" className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Icon icon="lucide:linkedin" className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Icon icon="lucide:github" className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 yuuCraft. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm" />
          </div>
        </div>
      </footer>
    </div>
  );
}
