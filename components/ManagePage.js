import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import tw from 'twrnc';
import React from 'react';
import Divider from './SmallComponents/Divider';
import SubLoginPage from './SmallComponents/SubLoginPage';

const ManagePage = () => {
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
  return (
    <ScrollView style={{flex: 1}}>
      <View style={tw`p-4`}>
        <Text style={tw`text-red-500 mb-3 font-bold`}>
          Current Inspection :{' '}
        </Text>
        <Divider />
        <Text style={tw`my-1 font-bold`}>Available Templates</Text>
        <Divider />
        <SubLoginPage data={data} />
        <Divider />
        <TextInput
          style={tw`w-full h-10 p-2 rounded-md border`}
          placeholder="Name The Inspection"
        />
        <Text style={tw`my-3 text-justify`}>
          Enter the File name to save the inspection to (e.g., John Smith - 1234
          My Street). Note: If you enter an existing name, it will overwrite the
          existing file. When you're done with the inspection, go to the sync
          tab to upload it to the cloud.
        </Text>

        <View style={tw`my-2 flex-1 flex-row`}>
          <TouchableOpacity
            style={[
              tw`p-2 w-1/2 rounded-md bg-gray-400`,
              {backgroundColor: '#fee4c3'},
            ]}>
            <Text style={tw`text-center text-black`}>Create</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              tw`p-2 w-1/2 rounded-md bg-gray-400 ml-2`,
              {backgroundColor: '#fee4c3'},
            ]}>
            <Text style={tw`text-center text-black`}>Delete</Text>
          </TouchableOpacity>
        </View>
        <Divider />
        <Text style={tw`my-1 font-bold`}>Client Presentation</Text>
        <Divider />
        <Text style={tw`my-1 font-bold`}>
          Manage Macj Client/Team Inspection Sessions
        </Text>
        <View style={tw`my-3`}>
          <TouchableOpacity
            style={[tw`p-2 w-full rounded-md `, {backgroundColor: '#fee4c3'}]}>
            <Text style={tw`text-center text-black`}>
              Manage Macj Client/Team Inspection Sessions
            </Text>
          </TouchableOpacity>
        </View>
        <Divider />
        <Text style={tw`my-1 font-bold`}>
          Select an existing inspcetion to continue working on it when you're do
          go to the sync tab to upload it to the cloud
        </Text>
        <View style={tw`my-5 flex-1 flex-row`}>
          <TouchableOpacity
            style={[
              tw`p-2 w-1/2 rounded-md bg-gray-400`,
              {backgroundColor: '#fee4c3'},
            ]}>
            <Text style={tw`text-center text-black`}>Open</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              tw`p-2 w-1/2 rounded-md bg-gray-400 ml-2`,
              {backgroundColor: '#fee4c3'},
            ]}>
            <Text style={tw`text-center text-black`}>Options</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ManagePage;
