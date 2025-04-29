import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { addDoc, collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import CustomButton from '../components/CustomButton';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [updateTheData, setUpdateTheData] = useState("");

  console.log("data", data)

  useEffect(() => {
    getData();
  }, [isSaved])

  const sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const getData = async () => {
    const allData = [];

    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        allData.push({ ...doc.data(), id: doc.id });
      });

      setData(allData);

    } catch (error) {
      console.log(error)
    }

  }

  const deleteData = async (value) => {
    try {
      await deleteDoc(doc(db, "users", value));
      console.log("delete successfull");
    } catch (error) {
      console.log(error)
    }
  }

  const updateData = async (value) => {
    try {
      const userData = doc(db, "users", value);

      await updateDoc(userData, {
        first: updateTheData
      });

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>

      <CustomButton
        title="Save"
        width="20%"
        onPress={() => { sendData(), setIsSaved(isSaved === false ? true : false) }}
        buttonColor="blue"
        pressedButtonColor="gray"
      />

      <CustomButton
        title="Get Data"
        width="20%"
        onPress={getData}
        buttonColor="blue"
        pressedButtonColor="gray"
      />

      <CustomButton
        title="Delete Data"
        width="20%"
        onPress={deleteData}
        buttonColor="blue"
        pressedButtonColor="gray"
      />

      <CustomButton
        title="Update Data"
        width="20%"
        onPress={updateData}
        buttonColor="blue"
        pressedButtonColor="gray"
      />

      <TextInput
        value={updateTheData}
        onChangeText={setUpdateTheData}
        placeholder='Enter your data'
        style={{ borderWidth: 1, width: "50%", marginVertical: 15, padding: 20 }}
      />

      <ScrollView>
        <View style={styles.dataContainer}>
          {
            data.map((value, index) => {
              return (
                <Pressable
                  onPress={() => [updateData(value.id), setIsSaved(isSaved === false ? true : false)]}
                  key={index}>
                  <Text>{value?.id}</Text>
                  <Text>{value.first}</Text>
                  <Text>{value.middle}</Text>
                  <Text>{value.last}</Text>
                  <Text>{value.born}</Text>
                </Pressable>
              )
            })
          }
        </View>
      </ScrollView >
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5EEDC",
  },
  dataContainer: {
    flex: 1,
    flexWrap: "wrap",
    gap: 20,
    padding: 20,
  }

})