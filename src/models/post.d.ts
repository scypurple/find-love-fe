declare namespace PostType {
  type Gender = 0 | 1

  /**
   * 帖子
  */
  interface Post {
    id: number,
    age: number,
    gender: Gender,
    education: string;
    place: string;
    job: string;
    contact: string;
    loveExp: string;
    content: string;
    photo: string;
    reviewStatus: number;
    reviewMessage?: string;
    viewNum: number;
    thumbNum: number;
    userId: number;
    createTime: Date;
    updateTime: Date;
  }

  /**
   * 是否点赞
   */
  interface PostVO extends Post {
    hasThumbs: boolean
  }

  /**
   * 增
   */
   interface PostAddRequest {
    age: number;
    gender: Gender;
    education: string;
    place: string;
    job: string;
    contact: string;
    loveExp: string;
    content: string;
    photo: string;
  }

  /**
   * 删
   */
  interface PostDeleteRequest {
    id: number
  }

  /**
   * 改
   */
   interface PostUpdateRequest {
    id: number;
    age?: number;
    gender?: Gender;
    education?: string;
    place?: string;
    job?: string;
    contact?: string;
    loveExp?: string;
    content?: string;
    photo?: string;
    reviewStatus?: number;
    reviewMessage?: string;
  }

  /**
   * 查
   */

  //!PageRequest has not ready
  //TODO fix 
  // interface PostQueryRequest extends PageRequest {
  //   education?: string;
  //   place?: string;
  //   job?: string;
  //   contact?: string;
  //   loveExp?: string;
  //   content?: string;
  //   userId?: number;
  //   reviewStatus?: number;
  // }

  /**
   * 帖子点赞请求
   */
  interface PostDoThumbRequest {
    postId: number;
  }
}