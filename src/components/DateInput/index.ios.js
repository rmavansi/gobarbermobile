import React, { useState, useMemo } from 'react';
import { format } from 'date-fns';
import { DatePickerIOS } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText, Picker } from './styles';

export default function DateInput({ date, onChange }) {
  const [opened, setOpened] = useState(false);

  const dateFormatted = useMemo(() => format(date, "dd 'de' MMM 'de' yyyy"), [
    date,
  ]);

  return (
    <Container>
      <DateButton onPress={() => setOpened(!opened)}>
        <Icon name="event" color="#FFF" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>

      {opened && (
        <Picker>
          <DatePickerIOS
            date={date}
            onDateChange={onChange}
            minimumDate={new Date()}
            minuteInterval={60}
            mode="date"
          />
        </Picker>
      )}
    </Container>
  );
}
