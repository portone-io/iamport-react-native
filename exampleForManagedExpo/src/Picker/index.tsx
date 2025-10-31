import { Select } from 'native-base';
import type React from 'react';

export type PickerOption = {
  label: string;
  value: string;
};

export type PickerProps = {
  options: PickerOption[];
  selectedValue?: PickerOption['value'];
  onValueChange?: (itemValue: PickerOption['value']) => void;
};

const Picker: React.FC<PickerProps> = (props) => {
  return (
    <Select
      mb={2}
      flex={1}
      borderColor={'transparent'}
      selectedValue={props.selectedValue}
      onValueChange={props.onValueChange}
    >
      {props.options.map((e) => {
        const { label, value } = e;
        return <Select.Item label={label} value={value} key={value} />;
      })}
    </Select>
  );
};

export default Picker;
