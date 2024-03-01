import { Fragment, memo, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropDownDirection } from 'shared/types/ui';
import popupCls from '../../styles/popup.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import { Button } from '../../../Button/Button';
import cls from './ListBox.module.scss';
import { HStack } from '../../../Stack';

export interface ListBoxItems {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
	items: ListBoxItems[];
	className?: string;
	value?: string;
	defaultValue?: string;
	onChange: <T extends string>(value: T) => void;
	readonly?: boolean;
	direction?: DropDownDirection;
	label?: string;
}

export const ListBox = memo((props:ListBoxProps) => {
    const {
        className,
        items,
        value,
        onChange,
        defaultValue,
        readonly,
        direction = 'bottom right',
        label,
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(cls.ListBox, { [popupCls.disabled]: readonly }, [className, popupCls.popup])}
                value={value}
                onChange={onChange}
            >

                <HListBox.Button
                    className={popupCls.trigger}
                >
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.ArticleTextBlockComponent, { [popupCls.active]: active, [popupCls.disabled]: item.disabled })}
                                >
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>

    );
});
