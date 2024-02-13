import { Fragment, memo, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';
import cls from './ListBox.module.scss';
import { HStack } from '../Stack';

export interface ListBoxItems {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

type DropDownDirection = 'top' | 'bottom';

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

const mapDirectionClass: Record<DropDownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
};

export const ListBox = memo((props:ListBoxProps) => {
    const {
        className,
        items,
        value,
        onChange,
        defaultValue,
        readonly,
        direction = 'bottom',
        label,
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(cls.ListBox, { [cls.disabled]: readonly }, [className])}
                value={value}
                onChange={onChange}
            >

                <HListBox.Button
                    className={cls.trigger}
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
                                    className={classNames(cls.ArticleTextBlockComponent, { [cls.active]: active, [cls.disabled]: item.disabled }, [cls.item])}
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
