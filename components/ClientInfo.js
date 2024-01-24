import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Button,
} from 'react-native';
import tw from 'twrnc';

import CustomDatePicker from './SmallComponents/DatePicker';

const ClientInfo = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const formatDate = date => {
    const options = {day: '2-digit', month: '2-digit', year: 'numeric'};
    return date.toLocaleDateString(undefined, options);
  };

 
  return (
    <ScrollView style={{flex: 1}}>
      <View style={tw`p-4`}>
        <TouchableOpacity
          style={[
            tw` p-2 w-full mb-4 rounded-md `,
            {backgroundColor: '#fee4c3'},
          ]}>
          <Text
            style={[
              tw`text-black text-center`,
              {fontSize: 20},
              {fontWeight: 'bold'},
            ]}>
            Import from ISN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tw` p-2 w-full mb-4 rounded-md `,
            {backgroundColor: '#fee4c3'},
          ]}>
          <Text
            style={[
              tw`text-black text-center`,
              {fontSize: 20},
              {fontWeight: 'bold'},
            ]}>
            Import from Macje Office
          </Text>
        </TouchableOpacity>
      </View>
      <View style={tw`p-4`}>
        <TextInput
          style={tw`border border-gray-300 p-2 w-full mb-4 rounded-md text-black`}
          placeholder="User Id"
        />
        <TextInput
          style={tw`border border-gray-300 p-2 w-full mb-4 rounded-md text-black`}
          placeholder="First Name "
        />
        <TextInput
          style={tw`border border-gray-300 p-2 w-full mb-4 rounded-md text-black`}
          placeholder="Last Name"
        />
        <TextInput
          style={tw`border border-gray-300 p-2 w-full mb-4 rounded-md text-black`}
          placeholder="Phone Number"
        />
        <TextInput
          style={tw`border border-gray-300 p-2 w-full mb-4 rounded-md text-black`}
          placeholder="Fax Number"
        />
        <TextInput
          style={tw`border border-gray-300 p-2 w-full mb-4 rounded-md text-black`}
          placeholder="Email "
        />
        <TextInput
          style={tw`border border-gray-300 p-2 w-full mb-4 rounded-md text-black`}
          placeholder="Inspection Address  "
        />
        <TextInput
          style={tw`border border-gray-300 p-2 w-full mb-4 rounded-md text-black`}
          placeholder="Address Line 2 "
        />
        <TextInput
          style={tw`border border-gray-300 p-2 w-full mb-4 rounded-md text-black`}
          placeholder="City  "
        />
        <TextInput
          style={tw`border border-gray-300 p-2 w-full mb-4 rounded-md text-black`}
          placeholder="State "
        />
        <TextInput
          style={tw`border border-gray-300 p-2 w-full mb-4 rounded-md text-black`}
          placeholder="Zip Code  "
        />
        <CustomDatePicker
          date={date}
          setDate={setDate}
          open={open}
          setOpen={setOpen}
        />
        <Text style={tw`pt-4 pb-4 text-black text-center`}>
          Selected Date: {formatDate(date)}
        </Text>
        <TextInput
          style={tw`border border-gray-300 p-2 w-full mb-4 rounded-md text-black`}
          placeholder="Age of Home  "
        />
        <TextInput
          style={tw`border border-gray-300 p-2 w-full mb-4 rounded-md text-black`}
          placeholder="Size"
        />
        <TextInput
          style={tw`border border-gray-300 p-2 w-full mb-4 rounded-md text-black`}
          placeholder="Inspection Fee"
        />
        <TextInput
          style={tw`border border-gray-300 p-2 w-full mb-4 rounded-md text-black`}
          placeholder="Whether"
        />
        <TextInput
          numberOfLines={4}
          style={tw`border border-gray-300 p-2 w-full  mb-4 rounded-md text-black`}
          placeholder=""
        />
        <Text style={tw`text-black`}>Signature Section</Text>
      </View>
    </ScrollView>
  );
};

export default ClientInfo;
