import { memo, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { DropDownDirection } from '@/shared/types/ui';
import { classNames } from '@/shared/lib/classNames/classNames';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    direction?: DropDownDirection;
    trigger: ReactNode;
    children: ReactNode;
}

export const Popover = memo((props: PopoverProps) => {
    const { className, trigger, direction = 'bottom right', children } = props;

    const menuClasses = [mapDirectionClass[direction], popupCls.menu];

    return (
        <HPopover
            className={classNames(cls.Popover, {}, [className, popupCls.popup])}
        >
            <HPopover.Button as="div" className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});
