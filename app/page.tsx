"use client";

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, Mail, ExternalLink, BookOpen, FileText, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { collectionTypeMap, fetchCurrentSeasonBangumi, Subject } from "./bangumi"
import { useEffect, useState } from "react"

export default function Home() {

  const [animes, setAnimes] = useState<Subject[]>([]);
  useEffect(() => {
    fetchCurrentSeasonBangumi("hiyasame")
      .then(data => {
        setAnimes(data)
        console.log(data)
      })
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <main className="w-full max-w-2xl mx-auto">
        <div className="space-y-8">
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-muted">
              <Image
                src="/avatar.jpeg?height=128&width=128"
                alt="个人照片"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold tracking-tight">寒雨</h1>
              <p className="text-xl text-muted-foreground mt-1">道阻且长，行则将至</p>
            </div>
          </div>

          <Separator />

          {/* Introduction */}
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed">
              社畜程序员，目前在美团工作，方向是 Android 开发。
            </p>
            <p className="text-lg leading-relaxed">
              热爱计算机科学，平时喜欢学习一些自己感兴趣的技术，渴望做一些有技术深度的事情。
            </p>
            <p className="text-lg leading-relaxed">
              除了学习技术之外也喜欢看番剧，摄影，旅行。
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
                  <Link href="https://blog.coldrain.ink/" target="_blank">
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
                  <Badge variant="outline">随想录</Badge>
                </div>
                <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">飞书文档</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  这里是我的随想录，更新相比博客会更加频繁。
                </p>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link href="https://gludayvepy.feishu.cn/wiki/Kt6QwvHjjiSEhykArYccpM5NnZc" target="_blank">
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
                username="@samui_same"
                href="https://x.com/samui_same"
                target="_blank"
              />
              <SocialLink
                icon={<Github className="h-5 w-5" />}
                platform="GitHub"
                username="hiyasame"
                href="https://github.com/hiyasame"
                target="_blank"
              />
              <SocialLink
                icon={<TelegramIcon className="h-5 w-5" />}
                platform="Telegram Group"
                username="寒雨的朋友们"
                href="https://t.me/+g5dLcSCl-ZlmZjM9"
                target="_blank"
              />
              <SocialLink
                icon={<Mail className="h-5 w-5" />}
                platform="Email"
                username="coldrain608@gmail.com"
                href="mailto:coldrain608@gmail.com"
              />
            </div>
          </div>

          <Separator />

          {/* Anime Tracking Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">本季度追番</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {
              animes.map((subject) => {
                return <Link href= {"https://bangumi.tv/subject/" + subject.id} target="_blank" key={subject.id}>
                  <AnimeCard
                    title={subject.name_cn}
                    image={subject.images.large}
                    status={collectionTypeMap[subject.type]}
                  />
                </Link>
              })
            }
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full max-w-2xl mx-auto mt-16 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} 寒雨. 保留所有权利.</p>
      </footer>
    </div>
  )
}

// Custom Telegram Icon
function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height="24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z" fill="#0F0F0F"/>
    </svg>
  )
}

interface SocialLinkProps {
  icon: React.ReactNode
  platform: string
  username: string
  href: string
  className?: string,
  target?: string
}

function SocialLink({ icon, platform, username, href, className, target }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target={target}
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
}

function AnimeCard({ title, image, status }: AnimeCardProps) {
  return (
    <div className="rounded-lg border overflow-hidden group hover:border-primary/50 transition-colors">
      <div className="relative h-36 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <Badge variant="secondary" className="absolute top-2 right-2">
          {status}
        </Badge>
      </div>
      <div className="p-3">
        <h3 className="font-medium text-sm mb-1 truncate">{title}</h3>
      </div>
    </div>
  )
}
