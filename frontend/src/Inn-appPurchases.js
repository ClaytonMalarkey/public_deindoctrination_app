import * as InAppPurchases from 'expo-in-app-purchases';
import { useEffect } from 'react';
import { Alert } from 'react-native';

const useInAppPurchases = () => {
  useEffect(() => {
    const fetchProducts = async () => {
      await InAppPurchases.connectAsync();
      const { responseCode, results } = await InAppPurchases.getProductsAsync(['coins_pack_1', 'coins_pack_2']);
      
      if (responseCode === InAppPurchases.IAPResponseCode.OK) {
        console.log("Products:", results);
      }
    };

    fetchProducts();
  }, []);

  const purchaseItem = async (productId) => {
    try {
      await InAppPurchases.purchaseItemAsync(productId);
      Alert.alert("Purchase Successful!");
    } catch (error) {
      console.error("Purchase failed:", error);
    }
  };

  return { purchaseItem };
};

export default useInAppPurchases;
