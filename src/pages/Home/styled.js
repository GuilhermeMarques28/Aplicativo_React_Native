import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #141a29;
  padding: 4px 0;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 14px;
  height: 50px;
  margin-bottom: 8px;
  margin-top: 10px;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 15%;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  background-color: rgba(250, 250, 250, 0.4);
  width: 85%;
  border-radius: 30px;
  height: 50px;
  font-size: 18px;
  padding: 8px 15px;
  color: #fff;
`;

export const Title = styled.Text`
  padding-top: 24px;
  padding-bottom: 8px;
  padding-left: 14px;
  padding-right: 14px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

export const BannerButton = styled.TouchableOpacity``;

export const Banner = styled.Image`
  height: 150px;
  border-radius: 6px;
  margin: 0 14px;
`;

export const SliderMovie = styled.FlatList`
  height: 250px;
  padding: 0 14px;
`;
