import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Button from '../components/button'
import RadioButton from "react-native-paper";


const FormBase = ({ fields, onSubmit, buttonTitle, title = "Formulario", options }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: fields.reduce((acc, field) => {
      acc[field.name] = field.value || "";
      return acc;
    }, {}),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {fields.map((field, index) => (
        <View key={index}>
          <Controller
            control={control}
            name={field.name}
            rules={field.rules}
            defaultValue={field.value || ""}
            render={({ field: { onChange, onBlur, value } }) => (
              <View
                style={styles.input}
              >

                 
                    <>
                  <Text style={styles.label}>{field.label}</Text>
                  <TextInput
                    secureTextEntry={field.name === "password"}
                    style={styles.inputText}
                    placeholder={field.label}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                    </>
              </View>
            

            )}
          />
          {errors[field.name] && <Text style={styles.roles}>{errors[field.name].message}</Text>}
        </View>
      ))}
      <Button onPress={handleSubmit(onSubmit)} title={buttonTitle || "Enviar"} />
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9",
    margin: 10,
    width: "95%",
    gap: 10,
    paddingBottom: 60,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: "black",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
    marginTop: 20,

  },

  inputText: {
    height: 40,
    paddingLeft: 10,
    backgroundColor: "#fff",
    borderRadius: 7,
    borderColor: "#000",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },

  roles: {
    color: "#B5241F",
    width: "75%",
    fontWeight: "bold",
    fontSize: 16,
  },
})

export default FormBase;