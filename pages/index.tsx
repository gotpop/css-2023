import { useState } from 'react'
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon
} from '@radix-ui/react-icons'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'

import type { NextPage } from 'next'
import Layout from '@layouts/layout'
import Intro from '@components/Intro/intro'

function RightSlot({ children }) {
  return (
    <div className="pl-4 ml-auto text-gray-500 group-hover:text-gray-200">
      {children}
    </div>
  )
}

function DropdownMenuItem({ children, ...props }) {
  return (
    <DropdownMenu.Item
      {...props}
      className={
        'group bg-white hover:bg-gray-700 hover:text-gray-200 text-xs rounded flex items-center h-6 px-1 pl-6 relative select-none' +
        (props.disabled ? ' text-gray-500' : '')
      }>
      {children}
    </DropdownMenu.Item>
  )
}

function DropdownMenuCheckboxItem({ children, ...props }) {
  return (
    <DropdownMenu.CheckboxItem
      {...props}
      className="relative flex items-center h-6 px-1 pl-6 text-xs bg-white rounded select-none group hover:bg-gray-700 hover:text-gray-200">
      {children}
    </DropdownMenu.CheckboxItem>
  )
}

function DropdownMenuItemIndicator({ children, ...props }) {
  return (
    <DropdownMenu.ItemIndicator
      {...props}
      className="absolute left-0 inline-flex items-center justify-center w-6">
      {children}
    </DropdownMenu.ItemIndicator>
  )
}

function Separator() {
  return <DropdownMenu.Separator className="h-[1px] bg-gray-300 m-1" />
}

function DropdownMenuRadioItem({
  children,
  ...props
}: {
  children: React.ReactNode
  value: string
}) {
  return (
    <DropdownMenu.RadioItem
      {...props}
      className="relative flex items-center h-6 px-1 pl-6 text-xs bg-white rounded select-none hover:bg-gray-700 hover:text-gray-200">
      {children}
    </DropdownMenu.RadioItem>
  )
}

export default function Home() {
  const [bookmarksChecked, setBookmarksChecked] = useState(true)
  const [urlsChecked, setUrlsChecked] = useState(false)
  const [person, setPerson] = useState('pedro')
  return (
    <Layout>
      {/* <Intro content={introContent} /> */}

      <div className="flex flex-col items-center justify-center w-full h-screen space-y-4 bg-gradient-to-r from-cyan-500 to-blue-500">
        <h1 className="text-6xl font-semibold text-white">Radix UI</h1>
        {/* <Link href={'https://github.com/gotpop/ui-system'}>GitHub</Link>
        <Link href={'http://localhost:3000'}>LocalHost</Link> */}
        <h1 className="text-4xl font-semibold text-white">Click me!</h1>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger
            asChild
            className="relative flex items-center h-8 px-2 text-xs bg-white select-none rounded-3xl">
            <button
              aria-label="Customise options"
              className="inline-flex items-center justify-center w-8 h-8 shadow-lg">
              <HamburgerMenuIcon />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Content
            sideOffset={5}
            className="p-1 bg-white rounded shadow-lg">
            <DropdownMenuItem>
              New Tab <RightSlot>⌘+T</RightSlot>
            </DropdownMenuItem>
            <DropdownMenuItem>
              New Window <RightSlot>⌘+N</RightSlot>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              New Private Window <RightSlot>⇧+⌘+N</RightSlot>
            </DropdownMenuItem>
            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger className="relative flex items-center h-6 px-1 pl-6 text-xs bg-white rounded select-none group hover:bg-gray-700 hover:text-gray-200 hover:border-0">
                More Tools
                <RightSlot>
                  <ChevronRightIcon />
                </RightSlot>
              </DropdownMenu.SubTrigger>
              <DropdownMenu.SubContent
                sideOffset={2}
                alignOffset={-5}
                className="p-1 bg-white rounded shadow-lg">
                <DropdownMenuItem>
                  Save Page As… <RightSlot>⌘+S</RightSlot>
                </DropdownMenuItem>
                <DropdownMenuItem>Create Shortcut…</DropdownMenuItem>
                <DropdownMenuItem>Name Window…</DropdownMenuItem>
                <Separator />
                <DropdownMenuItem>Developer Tools</DropdownMenuItem>
              </DropdownMenu.SubContent>
            </DropdownMenu.Sub>
            <Separator />
            <DropdownMenuCheckboxItem
              checked={bookmarksChecked}
              onCheckedChange={setBookmarksChecked}>
              <DropdownMenuItemIndicator>
                <CheckIcon />
              </DropdownMenuItemIndicator>
              Show Bookmarks <RightSlot>⌘+B</RightSlot>
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={urlsChecked}
              onCheckedChange={setUrlsChecked}>
              <DropdownMenuItemIndicator>
                <CheckIcon />
              </DropdownMenuItemIndicator>
              Show Full URLs
            </DropdownMenuCheckboxItem>
            <Separator />
            <DropdownMenu.Label className="pl-6 text-xs leading-6 text-gray-700">
              Contributors
            </DropdownMenu.Label>

            <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
              <DropdownMenuRadioItem value="pedro">
                <DropdownMenuItemIndicator>
                  <DotFilledIcon />
                </DropdownMenuItemIndicator>
                Pedro Sanchez
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="pablo">
                <DropdownMenuItemIndicator>
                  <DotFilledIcon />
                </DropdownMenuItemIndicator>
                Pablo Sanchez
              </DropdownMenuRadioItem>
            </DropdownMenu.RadioGroup>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </Layout>
  )
}
