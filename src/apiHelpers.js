import axios from "axios";
import { BASE_URL } from './config.js';

class FamilyFeudApi {

  /*getQuestions: gets all Questions*/
  static async getQuestions() {
    try{
      let response = await axios({url: `${BASE_URL}/questions`, method: 'get'});
      return response.data;
    }catch (err){
      let message = err.response.data.message;
      throw message;
    }
  }

  /*getQuestion: gets question by questionMain*/
  static async getQuestion(questionMain) {
    try{
      let response = await axios({url: `${BASE_URL}/questions/${questionMain}`, method: 'get'});
      return response.data;
    }catch (err){
      let message = err.response.data.message;
      throw message;
    }
  }
}

export default FamilyFeudApi;