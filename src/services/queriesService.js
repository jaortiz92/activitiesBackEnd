import axiosInstance from "@/plugins/axios";

export const queriesService = {
  getdepositAccounts: function () {
    return axiosInstance.get(`/query/deposit_accounts`);
  },
};
