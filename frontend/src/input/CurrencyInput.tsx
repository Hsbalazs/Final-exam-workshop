import React, { ChangeEvent } from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const numberMask = createNumberMask({
  prefix: '',
  suffix: ' Ft',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ' ',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 0,
  integerLimit: null,
  requireDecimal: false,
  allowNegative: false,
  allowLeadingZeroes: false,
});

type CurrencyInputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const CurrencyInput: React.FC<CurrencyInputProps> = ({ value, onChange }) => (
  <MaskedInput
    mask={numberMask}
    name="price"
    value={value}
    onChange={onChange}
    placeholder="Enter a number"
    className="form-control"
  />
);

export default CurrencyInput