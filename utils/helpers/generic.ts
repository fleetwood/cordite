import { v4 as uid } from 'uuid'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export const URLify = (content: string) => {
  const urls = content.match(
    /((((ftp|https?):\/\/)|(w{3}\.))[\-\w@:%_\+.~#?,&\/\/=]+)/g
  )
  if (urls) {
    urls.forEach(function (url: string) {
      content = content.replace(
        url,
        '<a target="_blank" href="' + url + '">' + url + '</a>'
      )
    })
  }
  return content.replace('(', '<br/>(')
}

export const dedupe = (arr: any[], key: string) => {
  const a: string[] = [],
    b: any[] = []
  arr.forEach((i) => {
    if (!a.includes(i[key])) {
      a.push(i[key])
      b.push(i)
    }
  })
  return b
}

export const rand = (min: number = 0, max: number = 1) => {
  if (min && !max) {
    max = min + 1
  }
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const randArray = (arr: any[]) => arr[rand(0, arr.length - 1)]

export const uuid = (key?: string) => key || uid()

export const toSlug = (s: string) =>
  encodeURIComponent(s.replaceAll(/[\W_]+/g, '-').toLowerCase())

export const notNullOrEmpty = (s: string | undefined | null) => s !== undefined && s !== null && s.trim().length > 0

export const capFirstLetter = (s: string) =>
  s.charAt(0).toUpperCase() + s.slice(1)
