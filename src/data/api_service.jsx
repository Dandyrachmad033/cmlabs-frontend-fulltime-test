// ApiService.js
import axios from 'axios';

class ApiService {
    static baseAPI = 'https://themealdb.com/api/json/v1/1';

    static async fetchIngredientsList() {
        try {
            const response = await axios.get(`${this.baseAPI}/list.php?i=list`);
            return response.data;
        } catch (error) {
            console.error('Error fetching ingredients list:', error);
            throw error;
        }
    }

    static async fetchIngredientsdetails(name_list) {
        try {
            const response = await axios.get(`${this.baseAPI}/filter.php?i=${name_list.ingredient}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching ingredients list:', error);
            throw error;
        }
    }

    static async fetchIngredientssubdetails(sub_param) {
        try {

            const response = await axios.get(`${this.baseAPI}/lookup.php?i=${sub_param.idmeal}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching ingredients list:', error);
            throw error;
        }
    }


    // You can add more methods for other API requests as needed
}

export default ApiService;
