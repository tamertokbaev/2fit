import React from "react";
import {Pressable, TextInput, View, Text, StyleSheet} from "react-native";
import {Controller, UseFormReturn} from "react-hook-form";

type Props = {
  form: UseFormReturn<any>
}

const AddNewTrainingForm: React.FC<Props> = ({form}) => {
  const {control, handleSubmit, formState: {errors}} = form

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <View>
      <Controller
        control={control}
        rules={{required: true}}
        name="Название тренировки"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Pressable
        onPress={handleSubmit(onSubmit)}>
        <Text>Добавить</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginVertical: 5
  },
})

export default AddNewTrainingForm
