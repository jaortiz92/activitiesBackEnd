import axiosInstance from "@/plugins/axios";

export const transactionService = {
  getLastTransactions: function (toShow) {
    return axiosInstance.get(
      `/transaction/transactionShowFront?limit=${toShow}`
    );
  },
};
