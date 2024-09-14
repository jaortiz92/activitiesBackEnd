import axiosInstance from "@/plugins/axios";

export const transactionService = {
  getLastTransactions: function (toShow) {
    return axiosInstance.get(
      `/transaction/transactionShowFront?limit=${toShow}`
    );
  },
  postTransaction: function (transaction) {
    console.log(transaction);
    return axiosInstance.post(`/transaction/complete_post`, transaction);
  },
  deleteTransaction: function (transaction_id) {
    return axiosInstance.delete(`/transaction/${transaction_id}/delete`);
  },
  getAccounts: function () {
    return axiosInstance.get(`/account/`);
  },
  getCategories: function (group) {
    return axiosInstance.get(`/category/group/${group}`);
  },
  getDescriptions: function (group) {
    return axiosInstance.get(`/description/group/${group}`);
  },
  getKinds: function (group) {
    return axiosInstance.get(`/kind/group/${group}`);
  },
  getOrigins: function () {
    return axiosInstance.get(`/origin/`);
  },
};
