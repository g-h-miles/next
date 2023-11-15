'use client';

import { useState } from 'react';
import { Title, Text } from '@/components/ui/text';
import HorizontalFormBlockWrapper from './horiozontal-block';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { CheckboxGroup } from '@/components/ui/checkbox-group';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup } from '@/components/ui/radio-group';
import { Radio } from '@/components/ui/radio';

const generalOptions = [
  {
    title: 'I’m mentioned in a message',
  },
  {
    title: 'Someone replies to any message',
  },
  {
    title: 'I’m assigned a task',
  },
  {
    title: 'A task is overdue',
  },
  {
    title: 'A task status is updated',
  },
];

const summaryOptions = [
  {
    title: 'Daily summary',
  },
  {
    title: 'Weekly summary',
  },
  {
    title: 'Monthly summary',
  },
  {
    title: 'Quaterly summary',
  },
];

export default function NotificationSettingsView() {
  const [values, setValues] = useState<string[]>([]);
  const [value, setValue] = useState('');

  return (
    <div className="@container">
      <HorizontalFormBlockWrapper
        childrenWrapperClassName="gap-0 @lg:gap-0"
        title="Notifications"
        titleClassName="text-xl font-semibold"
        description="Select when and how you will be notified."
      />
      <HorizontalFormBlockWrapper
        title="General notifications"
        description="Select when you’ll be notified when the following changes occur."
        descriptionClassName="max-w-[344px]"
      >
        <div className="col-span-2">
          {generalOptions.map((opt, index) => (
            <div
              key={`generalopt-${index}`}
              className="flex items-center justify-between border-b border-gray-300 py-6 last:border-none last:pb-0"
            >
              <Text className="text-sm font-medium text-gray-900">
                {opt.title}
              </Text>
              <ButtonGroup
                onChange={(option) => console.log(opt.title, option)}
              />
            </div>
          ))}
        </div>
      </HorizontalFormBlockWrapper>
      <HorizontalFormBlockWrapper
        title="Summary notifications"
        description="Select when you’ll be notified when the following summaries or report are ready."
        descriptionClassName="max-w-[344px]"
      >
        <div className="col-span-2">
          {summaryOptions.map((opt, index) => (
            <div
              key={`summaryopt-${index}`}
              className="flex items-center justify-between border-b border-gray-300 py-6 last:border-none last:pb-0"
            >
              <Text className="text-sm font-medium text-gray-900">
                {opt.title}
              </Text>
              <ButtonGroup
                onChange={(option) => console.log(opt.title, option)}
              />
            </div>
          ))}
        </div>
      </HorizontalFormBlockWrapper>
      <HorizontalFormBlockWrapper
        title="Comments"
        description="These are notifications for comments on your posts and replies to your comments."
        descriptionClassName="max-w-[344px]"
      >
        <div className="col-span-2">
          <Switch
            label="Do not notify me"
            variant="flat"
            labelClassName="font-medium text-sm text-gray-900"
          />
          <Switch
            label="Mentions only"
            variant="flat"
            labelClassName="font-medium text-sm text-gray-900"
          />
          <Switch
            label="All comments"
            variant="flat"
            labelClassName="font-medium text-sm text-gray-900"
          />
        </div>
      </HorizontalFormBlockWrapper>
      <HorizontalFormBlockWrapper
        title="Notifications from us"
        description="These are notifications for when someone tags you in a comment, post or story."
        descriptionClassName="max-w-[344px]"
      >
        <div className="col-span-2">
          <CheckboxGroup
            values={values}
            setValues={setValues}
            className="flex flex-col"
          >
            <Checkbox
              name="app_notification"
              label="News and updates"
              value="news_updates"
              variant="active"
              className="mb-5"
              inputClassName="checked:!bg-gray-900 border-gray-300"
              labelClassName="pl-2 text-sm font-medium !text-gray-900"
              helperClassName="text-gray-500 text-sm mt-3 ms-8"
              helperText="News about product and feature updates."
            />
            <Checkbox
              name="app_notification"
              label="Tips and tutorials"
              value="tips_tutorials"
              variant="active"
              className="mb-5"
              inputClassName="checked:!bg-gray-900 border-gray-300"
              labelClassName="pl-2 text-sm font-medium text-gray-900"
              helperClassName="text-gray-500 text-sm mt-3 ms-8"
              helperText="Tips on getting more out of Untitled."
            />
            <Checkbox
              name="app_notification"
              label="User research"
              value="user_research"
              variant="active"
              inputClassName="checked:!bg-gray-900 border-gray-300"
              labelClassName="pl-2 text-sm font-medium text-gray-900"
              helperClassName="text-gray-500 text-sm mt-3 ms-8"
              helperText="Get involved in our beta testing program or participate in paid product user research."
            />
          </CheckboxGroup>
        </div>
      </HorizontalFormBlockWrapper>
      <HorizontalFormBlockWrapper
        title="Reminders"
        description="These are notifications to remind you of updates you might have missed."
        descriptionClassName="max-w-[344px]"
      >
        <div className="col-span-2">
          <RadioGroup
            value={value}
            setValue={setValue}
            className="justify-center space-x-4 space-y-4"
          >
            <div className="divide-slate-300 flex w-full flex-col md:w-[500px]">
              <Radio
                name="reminders"
                label="Do not notify me"
                value="do_not_notify"
                className="mb-5"
                labelClassName="pl-2 text-sm font-medium text-gray-900"
              />
              <Radio
                name="reminders"
                label="Important reminders only"
                value="important_only"
                className="mb-5"
                labelClassName="pl-2 text-sm font-medium text-gray-900"
                helperClassName="text-gray-500 text-sm mt-3 ms-8"
                helperText="Only notify me if the reminder is tagged as important."
              />
              <Radio
                name="reminders"
                value="all_reminder"
                label="All reminders"
                labelClassName="pl-2 text-sm font-medium text-gray-900"
                helperClassName="text-gray-500 text-sm mt-3 ms-8"
                helperText="Notify me for all reminders."
              />
            </div>
          </RadioGroup>
        </div>
      </HorizontalFormBlockWrapper>
      <HorizontalFormBlockWrapper
        title="More activity about you"
        description="These are notifications for posts on your profile, likes and other reactions to your posts, and more."
        descriptionClassName="max-w-[344px]"
        className="border-0 pb-0"
      >
        <div className="col-span-2">
          <RadioGroup
            value={value}
            setValue={setValue}
            className="justify-center space-x-4 space-y-4"
          >
            <div className="divide-slate-300 flex w-full flex-col md:w-[500px]">
              <Radio
                name="activity"
                label="Do not notify me"
                value="do_not_notify_activity"
                className="mb-5"
                labelClassName="pl-2 text-sm font-medium text-gray-900"
              />
              <Radio
                name="activity"
                value="all_reminder_activity"
                label="All reminders"
                labelClassName="pl-2 text-sm font-medium text-gray-900"
                helperClassName="text-gray-500 text-sm mt-3 ms-8"
                helperText="Notify me for all reminders."
              />
            </div>
          </RadioGroup>
        </div>
      </HorizontalFormBlockWrapper>
    </div>
  );
}

const options = ['None', 'In-app', 'Email'];

function ButtonGroup({ onChange }: { onChange: (option: string) => void }) {
  const [selected, setSelected] = useState<string>();
  function handleOnClick(option: string) {
    setSelected(option);
    onChange && onChange(option);
  }

  return (
    <div className="inline-flex gap-1">
      {options.map((option) => (
        <Button
          key={option}
          variant={selected === option ? 'solid' : 'outline'}
          onClick={() => handleOnClick(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}
