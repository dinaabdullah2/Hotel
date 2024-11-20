import { TextInput, TextInputProps, ActionIcon, useMantineTheme } from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

function SearchInput(props: TextInputProps) {
  const theme = useMantineTheme();

  return (
    <TextInput
      radius="md"
      size="md"
      rightSection={
        <ActionIcon size={32} radius="xl" className=' hover:text-white hover:bg-bg_banfsgy ' >
          {theme.dir === 'ltr' ? (
            <IconSearch size="1.1rem" stroke={1.5} />
          ) : (
            <IconArrowLeft size="1.1rem" stroke={1.5} />
          )}
        </ActionIcon>
      }
      placeholder="Read about ..."
      rightSectionWidth={42}
      {...props}
    />
  );
}
export default SearchInput
