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

export const abbrNum = (n: number | Number | null | undefined) =>
  n
    ? new Intl.NumberFormat('en-US', {
        notation: 'compact',
        compactDisplay: 'short',
      }).format(Number(n))
    : '0'

export const abcs = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'.split(
  ','
)

export const ana = (str: string) =>
  str
    .substring(0, 1)
    .toLowerCase()
    .match(/[aeiou]/)
    ? 'AN'
    : 'A'

export const toSlug = (s: string) =>
  encodeURIComponent(s.replaceAll(/[\W_]+/g, '-').toLowerCase())

export const capFirstLetter = (s: string) =>
  s.charAt(0).toUpperCase() + s.slice(1)
