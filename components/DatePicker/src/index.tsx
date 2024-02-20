/* eslint-disable react/jsx-curly-brace-presence */
import React from "react";
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DatePicker as AriaDatePicker,
  DateSegment,
  Dialog,
  Group,
  Heading,
  Label,
  Popover,
} from "react-aria-components";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const DatePicker = (): JSX.Element => {
  return (
    <AriaDatePicker className={"flex flex-col"}>
      <Label className="text-blue-500">Date</Label>
      <div className="border border-slate-400 relative h-8">
        <Group className={"flex flex-1 h-full"}>
          <DateInput className={"flex h-full items-center"}>
            {(segment) => <DateSegment segment={segment} />}
          </DateInput>
          <Button
            className={
              "flex flex-1 items-center justify-end focus:outline-none"
            }
          >
            <ChevronDown />
          </Button>
        </Group>
      </div>
      <Popover>
        <Dialog className="bg-white shadow-lg p-4">
          <Calendar>
            <header className="flex flex-1 justify-between">
              <Button slot="previous">
                <ChevronLeft />
              </Button>
              <Heading />
              <Button slot="next">
                <ChevronRight />
              </Button>
            </header>
            <CalendarGrid>
              {(date) => <CalendarCell className={"p-2"} date={date} />}
            </CalendarGrid>
          </Calendar>
        </Dialog>
      </Popover>
    </AriaDatePicker>
  );
};

export default DatePicker;
