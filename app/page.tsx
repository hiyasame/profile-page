import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, Mail, ExternalLink, BookOpen, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <main className="w-full max-w-2xl mx-auto">
        <div className="space-y-8">
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-muted">
              <Image
                src="/placeholder.svg?height=128&width=128"
                alt="个人照片"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold tracking-tight">张小明</h1>
              <p className="text-xl text-muted-foreground mt-1">探索 · 创造 · 分享</p>
            </div>
          </div>

          <Separator />

          {/* Introduction */}
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed">
              你好，我是张小明，一名热爱创意和技术的自由职业者。我专注于将想法转化为现实，通过简约而有效的设计解决问题。
              我相信简单是最终的复杂，无论是在设计还是在生活中。
            </p>
            <p className="text-lg leading-relaxed">
              当我不在电脑前工作时，你可以找到我在咖啡馆阅读，或者在城市的某个角落拍照。我喜欢探索新事物，并在旅途中寻找灵感。
            </p>
          </div>

          <Separator />

          {/* Writing Spaces Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">思考与创作</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg border p-5 bg-background hover:bg-muted/50 transition-colors group">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <Badge variant="outline">正式博文</Badge>
                </div>
                <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">我的博客</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  这里收录了我的技术文章、读书笔记和深度思考，是我正式的知识输出空间。
                </p>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link href="/blog">
                    <span>访问博客</span>
                    <ExternalLink className="ml-2 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>

              <div className="rounded-lg border p-5 bg-background hover:bg-muted/50 transition-colors group">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    <FileText className="h-5 w-5" />
                  </div>
                  <Badge variant="outline">随想与笔记</Badge>
                </div>
                <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">飞书文档</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  这里是我的随想录，包含一些不适合放在博客里的想法、草稿和个人记录。
                </p>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link href="/feishu">
                    <span>查看文档</span>
                    <ExternalLink className="ml-2 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <Separator />

          {/* Social Links */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">找到我</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <SocialLink
                icon={<Twitter className="h-5 w-5" />}
                platform="Twitter"
                username="@yourtwitter"
                href="https://twitter.com/yourtwitter"
              />
              <SocialLink
                icon={<Github className="h-5 w-5" />}
                platform="GitHub"
                username="yourusername"
                href="https://github.com/yourusername"
              />
              <SocialLink
                icon={<ZhihuIcon className="h-5 w-5" />}
                platform="知乎"
                username="你的知乎名"
                href="https://zhihu.com/people/yourzhihu"
              />
              <SocialLink
                icon={<BilibiliIcon className="h-5 w-5" />}
                platform="哔哩哔哩"
                username="你的B站名"
                href="https://space.bilibili.com/yourbilibili"
              />
              <SocialLink
                icon={<TelegramIcon className="h-5 w-5" />}
                platform="Telegram 群组"
                username="t.me/yourgroup"
                href="https://t.me/yourgroup"
              />
              <SocialLink
                icon={<Mail className="h-5 w-5" />}
                platform="Email"
                username="hello@example.com"
                href="mailto:hello@example.com"
              />
            </div>
          </div>

          <Separator />

          {/* Anime Tracking Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">本季度追番</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AnimeCard
                title="进击的巨人 最终季"
                image="/placeholder.svg?height=150&width=250"
                status="已完结"
                progress="25/25"
              />
              <AnimeCard
                title="咒术回战 第二季"
                image="/placeholder.svg?height=150&width=250"
                status="追剧中"
                progress="15/23"
              />
              <AnimeCard
                title="间谍过家家 第二季"
                image="/placeholder.svg?height=150&width=250"
                status="追剧中"
                progress="8/12"
              />
              <AnimeCard
                title="葬送的芙莉莲"
                image="/placeholder.svg?height=150&width=250"
                status="追剧中"
                progress="12/25"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full max-w-2xl mx-auto mt-16 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} 张小明. 保留所有权利.</p>
      </footer>
    </div>
  )
}

// Custom Zhihu Icon
function ZhihuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" {...props}>
      <path
        d="M13.4323 19.3384H14.913L15.2702 17.8954H13.6526L13.4323 19.3384ZM13.4323 19.3384L12.6719 22.0001H10.3486L10.9391 19.3384H8.66577L8.61328 19.6694C8.61328 19.6694 7.50366 20.9954 6.17444 21.6694C6.17444 21.6694 4.84522 22.3434 3.73559 22.6744C3.73559 22.6744 2.62597 23.0054 2.29883 23.0054H1.64844L3.29883 19.3384H1.64844L1.97559 17.8954H6.50159L6.83873 16.4524H4.84522L5.17236 14.6784H7.16587L7.50302 13.2354H5.50952L5.83666 11.7924H7.83017L8.50159 8.81445H6.50809L6.83523 7.37145H8.82873L9.16587 5.92845H7.17236L7.50952 4.48545H9.50302L10.1744 1.50745H12.4978L11.8264 4.48545H13.6526L14.3239 1.50745H16.6473L15.976 4.48545H17.9695L17.6423 5.92845H15.6488L15.3217 7.37145H17.3152L16.988 8.81445H14.9945L14.3231 11.7924H16.3166L15.9895 13.2354H13.996L13.6688 14.6784H15.6623L15.3352 16.1214H13.3417L13.4323 19.3384Z"
        fill="currentColor"
      />
      <path d="M12.6719 17.8954H10.9391L10.3486 16.1214H12.0814L12.6719 17.8954Z" fill="currentColor" />
      <path d="M12.0814 16.1214L11.4909 14.6784H9.75806L9.16755 16.1214H12.0814Z" fill="currentColor" />
      <path d="M11.4909 14.6784L10.9004 13.2354H9.16755L8.57704 14.6784H11.4909Z" fill="currentColor" />
      <path d="M10.9004 13.2354L10.3099 11.7924H8.57704L7.98653 13.2354H10.9004Z" fill="currentColor" />
      <path d="M10.3099 11.7924L9.71938 10.3494H7.98653L7.39601 11.7924H10.3099Z" fill="currentColor" />
      <path d="M9.71938 10.3494L9.12887 8.90637H7.39601L6.8055 10.3494H9.71938Z" fill="currentColor" />
      <path d="M9.12887 8.90637L8.53836 7.46338H6.8055L6.21499 8.90637H9.12887Z" fill="currentColor" />
      <path d="M8.53836 7.46338L7.94785 6.02039H6.21499L5.62448 7.46338H8.53836Z" fill="currentColor" />
      <path d="M7.94785 6.02039L7.35734 4.5774H5.62448L5.03397 6.02039H7.94785Z" fill="currentColor" />
      <path d="M13.6526 17.8954H15.2702L14.6797 16.1214H13.0621L13.6526 17.8954Z" fill="currentColor" />
      <path d="M13.0621 16.1214L12.4716 14.6784H14.0892L14.6797 16.1214H13.0621Z" fill="currentColor" />
      <path d="M12.4716 14.6784L11.8811 13.2354H13.4987L14.0892 14.6784H12.4716Z" fill="currentColor" />
      <path d="M11.8811 13.2354L11.2906 11.7924H12.9082L13.4987 13.2354H11.8811Z" fill="currentColor" />
      <path d="M11.2906 11.7924L10.7001 10.3494H12.3177L12.9082 11.7924H11.2906Z" fill="currentColor" />
      <path d="M10.7001 10.3494L10.1096 8.90637H11.7272L12.3177 10.3494H10.7001Z" fill="currentColor" />
      <path d="M10.1096 8.90637L9.51913 7.46338H11.1367L11.7272 8.90637H10.1096Z" fill="currentColor" />
      <path d="M9.51913 7.46338L8.92862 6.02039H10.5462L11.1367 7.46338H9.51913Z" fill="currentColor" />
      <path d="M8.92862 6.02039L8.33811 4.5774H9.95569L10.5462 6.02039H8.92862Z" fill="currentColor" />
      <path
        d="M19.9629 19.3384H22.2863L22.6134 17.8954H20.29L19.9629 19.3384ZM19.9629 19.3384L19.2025 22.0001H16.8792L17.4697 19.3384H15.1963L15.1438 19.6694C15.1438 19.6694 14.0342 20.9954 12.705 21.6694C12.705 21.6694 11.3758 22.3434 10.2661 22.6744C10.2661 22.6744 9.15651 23.0054 8.82937 23.0054H8.17897L9.82937 19.3384H8.17897L8.50612 17.8954H13.0321L13.3693 16.4524H11.3758L11.7029 14.6784H13.6964L14.0336 13.2354H12.0401L12.3672 11.7924H14.3607L15.0321 8.81445H13.0386L13.3658 7.37145H15.3593L15.6964 5.92845H13.7029L14.0401 4.48545H16.0336L16.705 1.50745H19.0284L18.357 4.48545H20.1832L20.8546 1.50745H23.1779L22.5066 4.48545H24.5001L24.1729 5.92845H22.1794L21.8523 7.37145H23.8458L23.5186 8.81445H21.5251L20.8537 11.7924H22.8472L22.5201 13.2354H20.5266L20.1994 14.6784H22.1929L21.8658 16.1214H19.8723L19.9629 19.3384Z"
        fill="currentColor"
      />
      <path d="M19.2025 17.8954H17.4697L16.8792 16.1214H18.612L19.2025 17.8954Z" fill="currentColor" />
      <path d="M18.612 16.1214L18.0215 14.6784H16.2886L15.6981 16.1214H18.612Z" fill="currentColor" />
      <path d="M18.0215 14.6784L17.431 13.2354H15.6981L15.1076 14.6784H18.0215Z" fill="currentColor" />
      <path d="M17.431 13.2354L16.8405 11.7924H15.1076L14.5171 13.2354H17.431Z" fill="currentColor" />
      <path d="M16.8405 11.7924L16.25 10.3494H14.5171L13.9266 11.7924H16.8405Z" fill="currentColor" />
      <path d="M16.25 10.3494L15.6595 8.90637H13.9266L13.3361 10.3494H16.25Z" fill="currentColor" />
      <path d="M15.6595 8.90637L15.069 7.46338H13.3361L12.7456 8.90637H15.6595Z" fill="currentColor" />
      <path d="M15.069 7.46338L14.4785 6.02039H12.7456L12.1551 7.46338H15.069Z" fill="currentColor" />
      <path d="M14.4785 6.02039L13.888 4.5774H12.1551L11.5646 6.02039H14.4785Z" fill="currentColor" />
      <path d="M20.29 17.8954H22.6134L22.0229 16.1214H19.6995L20.29 17.8954Z" fill="currentColor" />
      <path d="M19.6995 16.1214L19.109 14.6784H21.4324L22.0229 16.1214H19.6995Z" fill="currentColor" />
      <path d="M19.109 14.6784L18.5185 13.2354H20.8419L21.4324 14.6784H19.109Z" fill="currentColor" />
      <path d="M18.5185 13.2354L17.928 11.7924H20.2514L20.8419 13.2354H18.5185Z" fill="currentColor" />
      <path d="M17.928 11.7924L17.3375 10.3494H19.6609L20.2514 11.7924H17.928Z" fill="currentColor" />
      <path d="M17.3375 10.3494L16.747 8.90637H19.0704L19.6609 10.3494H17.3375Z" fill="currentColor" />
      <path d="M16.747 8.90637L16.1565 7.46338H18.4799L19.0704 8.90637H16.747Z" fill="currentColor" />
      <path d="M16.1565 7.46338L15.566 6.02039H17.8894L18.4799 7.46338H16.1565Z" fill="currentColor" />
      <path d="M15.566 6.02039L14.9755 4.5774H17.2989L17.8894 6.02039H15.566Z" fill="currentColor" />
    </svg>
  )
}

// Custom Bilibili Icon
function BilibiliIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" {...props}>
      <path
        d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906L17.813 4.653zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773H5.333zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z"
        fill="currentColor"
      />
    </svg>
  )
}

// Custom Telegram Icon
function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" {...props}>
      <path
        d="M22.0717 3.32941C21.7516 3.0559 21.3529 2.89713 20.9346 2.87941C20.5162 2.86169 20.1043 2.98608 19.7617 3.23341L2.85167 14.1334C2.48384 14.3956 2.21691 14.7695 2.09709 15.1991C1.97726 15.6287 2.01132 16.0853 2.19317 16.4914C2.37503 16.8975 2.69148 17.2305 3.09034 17.4346C3.4892 17.6388 3.94743 17.7019 4.38767 17.6134L8.32367 16.7974L10.7537 21.6554C10.9341 22.0163 11.2344 22.3058 11.6058 22.4796C11.9771 22.6534 12.3969 22.7017 12.7997 22.6174C13.2025 22.5331 13.5653 22.3208 13.8346 22.0144C14.1039 21.708 14.2644 21.3247 14.2917 20.9214L15.3077 5.89741L20.9077 10.0214C21.2177 10.2494 21.5953 10.3734 21.9837 10.3734C22.3721 10.3734 22.7497 10.2494 23.0597 10.0214C23.3697 9.79341 23.6117 9.47141 23.7577 9.09941C23.9037 8.72741 23.9477 8.32141 23.8837 7.92541L22.8677 4.01741C22.7881 3.7281 22.6418 3.46089 22.4417 3.23941L22.0717 3.32941ZM20.9077 8.32941L14.2917 3.32941L13.3677 16.7974L10.7537 11.4494C10.5733 11.0885 10.273 10.799 9.90168 10.6252C9.53035 10.4514 9.11055 10.4031 8.70767 10.4874L4.38767 11.3034L20.0037 1.67941C20.1157 1.61341 20.2437 1.59341 20.3717 1.59341C20.4997 1.59341 20.6277 1.61341 20.7397 1.67941C20.8517 1.74541 20.9357 1.82941 20.9917 1.93741C21.0477 2.04541 21.0757 2.17341 21.0757 2.30141L22.0917 6.20941C22.1237 6.33741 22.1077 6.47341 22.0557 6.59341C22.0037 6.71341 21.9197 6.81741 21.8077 6.88341C21.6957 6.94941 21.5677 6.96941 21.4397 6.96941C21.3117 6.96941 21.1837 6.94941 21.0717 6.88341L20.9077 8.32941Z"
        fill="currentColor"
      />
    </svg>
  )
}

interface SocialLinkProps {
  icon: React.ReactNode
  platform: string
  username: string
  href: string
  className?: string
}

function SocialLink({ icon, platform, username, href, className }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 p-3 rounded-lg border bg-background hover:bg-muted/50 transition-colors ${className}`}
    >
      <div className="text-primary">{icon}</div>
      <div>
        <div className="text-sm font-medium">{platform}</div>
        <div className="text-xs text-muted-foreground">{username}</div>
      </div>
    </Link>
  )
}

interface AnimeCardProps {
  title: string
  image: string
  status: string
  progress: string
}

function AnimeCard({ title, image, status, progress }: AnimeCardProps) {
  return (
    <div className="rounded-lg border overflow-hidden group hover:border-primary/50 transition-colors">
      <div className="relative h-36 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <Badge variant={status === "已完结" ? "secondary" : "default"} className="absolute top-2 right-2">
          {status}
        </Badge>
      </div>
      <div className="p-3">
        <h3 className="font-medium text-sm mb-1 truncate">{title}</h3>
        <div className="flex justify-end">
          <span className="text-xs text-muted-foreground">{progress}</span>
        </div>
      </div>
    </div>
  )
}
