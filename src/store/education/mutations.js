/**
 * Created by LiuXiang on 18/04/09.
 */
export default  {

  initEducationTypeManagement(state, data) {
    state.educationTypeManagement = data;
  },

  initSelectTypeAllInfo(state, data) {
    state.selectTypeAllInfo = data;
  },

  initAdminEducationAuditVideo(state, data) {
    state.adminEducationAuditList = data;
  },
  initEducationHomePageBigImage(state, data) {
    state.adminEducationHomePageBigImageList = data;
  },
  initAdminEducationAuditRecommend(state, data) {
    state.adminEducationAuditRecommend = data;
  },
  initEducationCourseRecommendAction(state, data) {
    state.EducationCourseRecommendCheck = data;
  },

  initEducationOrderManagement(state, data) {
    state.educationOrderManagement = data;
  },
  initEducationUserInfoAction(state, data) {
    state.educationUserInfoActionList = data;
  },
  searchCourseAction(state, data) {
    state.educationcourseList = data;
  },

}



