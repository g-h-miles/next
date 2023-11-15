'use client';

import Image from 'next/image';
import { useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import { useAtomValue } from 'jotai';
import { FiExternalLink } from 'react-icons/fi';
import { HiOutlineClipboardDocument } from 'react-icons/hi2';
import { PiEye, PiDownloadSimpleBold, PiCheck } from 'react-icons/pi';
import { Avatar } from '@/components/ui/avatar';
import { Tooltip } from '@/components/ui/tooltip';
import { Title, Text } from '@/components/ui/text';
import { getRelativeTime } from '@/utils/get-relative-time';
import {
  dataAtom,
  messageIdAtom,
} from '@/app/shared/support/inbox/message-list';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { DotSeparator } from '@/app/shared/support/inbox/message-details';
import pdfIcon from '@public/pdf-icon.svg';

const p1 = `asperiores nesciunt autem quod error hic laudantium iste perspiciatis officiis voluptatibus exercitationem facere atque sapiente fuga excepturi qui illum alias reiciendis exercitationem ad occaecati deserunt molestiae maxime ratione consequuntur mollitia quae tempore alias ea architecto dolore iusto eaque error odit`;
const p2 = `maxime suscipit fuga ducimus perspiciatis nemo porro nihil eaque a ab molestias praesentium voluptatum dignissimos odit ea omnis dolores maxime aspernatur vitae incidunt corrupti laudantium deserunt nisi facere sapiente fugiat`;
const p3 = `consequatur pariatur cupiditate sit ut velit est fugiat itaque sequi`;
const p4 = `pariatur necessitatibus quia molestiae minus nisi cumque dicta nobis reprehenderit porro placeat aliquid consequatur maiores earum sapiente dolores aperiam asperiores aut rerum tenetur voluptatibus voluptas delectus tenetur quam quisquam possimus amet accusantium dolore eius repudiandae unde rem blanditiis quae voluptatem porro quaerat magnam voluptas repellat debitis culpa dolorum sed cupiditate`;
const p5 = `quia ullam aut occaecati atque eos dolores numquam dignissimos voluptatem ratione ipsa provident cupiditate molestias repellat reiciendis reiciendis enim voluptatibus ipsum velit velit libero cum reiciendis mollitia eius a nam necessitatibus in quos mollitia at quis sunt dolor`;
const p6 = `excepturi corrupti iure dolores quam inventore veritatis culpa modi saepe alias esse aperiam ipsam assumenda ex ex dolor pariatur debitis accusantium architecto omnis quae officia`;
const p7 = `maiores nostrum omnis dolor debitis minima omnis corporis incidunt aperiam vel tenetur enim perspiciatis incidunt ex laborum ex facilis similique nam facilis nostrum magni voluptatum molestiae voluptate dignissimos saepe ratione consequatur at sequi quidem est quibusdam ducimus facere laborum sunt sapiente ex repudiandae eius rem similique cumque doloremque eius omnis pariatur laboriosam modi nihil odit voluptatum tempora ratione magnam quo inventore vitae numquam`;

export default function MessageBody() {
  const data = useAtomValue(dataAtom);
  const messageId = useAtomValue(messageIdAtom);
  const [isCopied, setIsCopied] = useState(false);
  const [state, copyToClipboard] = useCopyToClipboard();

  const message = data.find((m) => m.id === messageId);
  const initials = `${message?.firstName.charAt(0)}${message?.lastName.charAt(
    0
  )}`;

  const handleCopyToClipboard = () => {
    copyToClipboard(message?.id as string);
    if (!state.error && state.value) {
      setIsCopied(() => true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000); // 3 seconds
    }
  };

  return (
    <div>
      <div className="grid grid-cols-[32px_1fr] items-start gap-3 lg:gap-4 xl:grid-cols-[48px_1fr]">
        <Avatar
          name="John Doe"
          src={message?.avatar}
          initials={initials}
          className="!h-8 !w-8 bg-[#70C5E0] font-medium text-white xl:!h-11 xl:!w-11"
        />
        <div className="-mt-1.5 lg:mt-0">
          <div className="flex items-center justify-between">
            <Title as="h3" className="text-sm font-medium">
              {message?.firstName} {message?.lastName}
            </Title>
          </div>
          <div className="mt-1.5 items-center gap-2 text-xs text-gray-500 lg:flex">
            <span className="flex items-center lowercase">
              {message?.email} <FiExternalLink className="ml-1 h-2.5 w-2.5" />
            </span>
            <DotSeparator className="hidden lg:block" />
            <span className="mt-1.5 flex items-center lg:mt-0">
              #{message?.id}{' '}
              <Tooltip
                size="sm"
                rounded="sm"
                placement="top"
                content={() => (isCopied ? 'Copied' : 'Click to copy')}
              >
                <button type="button" onClick={handleCopyToClipboard}>
                  {isCopied ? (
                    <PiCheck className="ml-1 h-3 w-3" />
                  ) : (
                    <HiOutlineClipboardDocument className="ml-1 h-3 w-3" />
                  )}
                </button>
              </Tooltip>
            </span>
            <DotSeparator className="hidden lg:block" />
            <span>Open {getRelativeTime(message?.date as Date)}</span>
          </div>
        </div>
      </div>

      <div className="ml-10 mt-3 grid gap-2 leading-relaxed xl:ml-16 2xl:mt-4">
        <Text>{p1}</Text>
        <Text>{p2}</Text>
        <Text>{p3}</Text>
        <Text>{p4}</Text>
        <Text>{p5}</Text>
        <Text>{p6}</Text>
        <Text>{p7}</Text>
        <Text>
          Regards, <br />
          {message?.firstName} {message?.lastName}, <br />
          {message?.company}
        </Text>

        {!isEmpty(message?.attachments) && (
          <div className="mt-2 grid gap-2 md:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-3">
            {message?.attachments.map((attachments) => (
              <div
                key={attachments.id}
                className="grid grid-cols-[40px_1fr] gap-2.5"
              >
                <figure className="relative h-10 w-10 overflow-hidden rounded">
                  {attachments.type === 'image' ? (
                    <Image
                      fill
                      alt={attachments.name}
                      src={attachments.thumbnail}
                      className="object-contain"
                    />
                  ) : (
                    <Image
                      src={pdfIcon}
                      alt="pdf icon"
                      className="h-full w-full"
                      quality={100}
                    />
                  )}
                </figure>

                <div className="text-xs">
                  <span className="flex items-center gap-2 font-lexend font-medium text-gray-700">
                    {attachments.name}
                    <span className="text-gray-500">({attachments.size})</span>
                  </span>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="flex items-center gap-2 text-gray-500 transition duration-300 hover:text-gray-900">
                      <PiEye className="h-3.5 w-3.5" /> <button>Preview</button>
                    </span>
                    <DotSeparator />
                    <div className="flex items-center gap-2 text-gray-500 transition duration-300 hover:text-gray-900">
                      <PiDownloadSimpleBold className="h-3.5 w-3.5" />{' '}
                      <button>Download</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
