import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  useColorScheme,
  ScrollView,
} from 'react-native';
import SubLoginPage from './SmallComponents/SubLoginPage';
import tw from 'twrnc';
import Divider from './SmallComponents/Divider';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const Login = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <ScrollView style={tw`flex-1 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <View style={tw`flex justify-center items-center mt-12 p-4`}>
        <Text style={tw`text-3xl font-bold mb-4`}>Login</Text>

        <TextInput
          style={tw`border border-gray-300 p-2 w-full mb-4 rounded-md text-black`}
          placeholder="User Id"
          placeholderStyle={{color: isDarkMode ? '#fff' : '#000'}}
        />
        <TextInput
          style={tw`border border-gray-300 p-2 w-full mb-4 rounded-md text-black`}
          placeholder="Password"
        />
        <TouchableOpacity
          style={[
            tw` p-2 w-full mb-4 rounded-md `,
            {backgroundColor: '#fee4c3'},
          ]}>
          <Text style={tw`text-black  text-center`}>Login</Text>
        </TouchableOpacity>
      </View>
      <Divider />
      <View style={tw`bg-white my-2`}>
        <Text style={tw`text-black ml-5 font-bold`}>
          Download Template From Cloud
        </Text>
      </View>
      <Divider />
      <View style={tw`mt-3`}>
        <SubLoginPage data={data} />
        <View style={tw`p-4`}>
          <Text style={tw`text-gray-500`}>
            Select the template from the cloud you'd like to download to device
            . once you've downloaded it click on the manage tab to open an
            inspection with it
          </Text>
          <View style={tw`mt-4`}>
            <TouchableOpacity
              style={[
                tw` p-2 w-full mb-4 rounded-md`,
                {backgroundColor: '#fee4c3'},
              ]}>
              <Text style={tw`text-black text-center`}>Refresh</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                tw` p-2 w-full mb-4 rounded-md`,
                {backgroundColor: '#fee4c3'},
              ]}>
              <Text style={tw`text-black text-center`}>Download</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <Divider />
        <Text style={tw`text-gray-900 ml-5 font-bold my-2`}>
          Upload Inspection to Cloud
        </Text>
        <Divider />
        <View style={tw`p-4`}>
          <Text style={tw`text-gray-500`}>
            Select the inspetion you'd like to send to the cloud so you can
            download it to the full version of home inspector
          </Text>
          <View style={tw`mt-4`}>
            <TouchableOpacity
              style={[
                tw` p-2 w-full mb-4 rounded-md`,
                {backgroundColor: '#fee4c3'},
              ]}>
              <Text style={tw`text-black text-center`}>Upload</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    color: '#000',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#000',
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: '#000',
  },
});
