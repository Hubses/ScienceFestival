export const NEWS_DETAIL_ACTION_TYPES = {
  GET: '[newsDetail] GET',
  GET_SUCCESS: '[newsDetail] GET SUCCESS',
  GET_FAILURE: '[newsDetail] GET FAILURE',
};

export const getNewsDetailAction = (payload?: sf.entities.NewsParams) => ({
  type: NEWS_DETAIL_ACTION_TYPES.GET
});

export const getNewsDetailSuccessAction = (payload: sf.entities.News) => ({
  type: NEWS_DETAIL_ACTION_TYPES.GET_SUCCESS,
  payload
});

export const getNewsDetailFailureAction = () => ({
  type: NEWS_DETAIL_ACTION_TYPES.GET_FAILURE
});
