import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: string;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { t } = useTranslation();

    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (

        <ListBox
            items={options}
            value={value}
            onChange={onChangeHandler}
            defaultValue={t('Choose currency')}
            label={t('Choose currency')}
            className={className}
            readonly={readonly}
            direction="top right"
        />
    );
});
