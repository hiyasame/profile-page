type CollectonType = "1" | "2" | "3" | "4" | "5"
export const collectionTypeMap = {
    "1": "想看",
    "2": "看过",
    "3": "在看",
    "4": "搁置",
    "5": "放弃"
}

export interface BangumiResponse {
  data: { subject: Subject, type: CollectonType }[];
}

// 定义番剧条目类型（根据API文档扩展）
export interface Subject {
  id: number;
  name: string;
  name_cn: string;
  date: string;  // 播出日期（示例："2025-04-05"）
  images: {
    small: string;
    grid: string;
    large: string;
    medium: string;
    common: string;
  };
  type: CollectonType
}

// 获取本季度追番列表
export async function fetchCurrentSeasonBangumi(username: string): Promise<Subject[]> {
  try {
    // 步骤1：获取用户基础信息（用于验证用户存在）
    const userRes = await fetch(`https://api.bgm.tv/user/${username}`);
    if (!userRes.ok) throw new Error("用户不存在或请求失败");
    
    // 步骤2：获取用户收藏列表（筛选本季度数据）
    const collectionRes = await fetch(
      `https://api.bgm.tv/v0/users/${username}/collections?subject_type=2&type=3`
    );
    const { data } = (await collectionRes.json()) as BangumiResponse;
    console.log(data)

    // 筛选本季度数据（2025年4月-6月）
    // 1-3 4-6 7-9 10-12
    const currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth() + 1;
    switch (currentMonth) {
        case 1:
        case 2:
        case 3: {
            currentMonth = 1;
            break;
        }
        case 4:
        case 5:
        case 6: {
            currentMonth = 4;
            break;
        }
        case 7:
        case 8:
        case 9: {
            currentMonth = 7;
            break;
        }
        case 10:
        case 11:
        case 12: {
            currentMonth = 10;
            break;
        }
    }
    return data.map(obj => {
        obj.subject.type = obj.type
        return obj.subject
    }).filter(subject => {
      const [year, month] = subject.date.split("-").map(Number);
      return year === currentYear && month >= currentMonth && month < currentMonth + 3;
    });
  } catch (error) {
    console.error("获取数据失败:", error);
    return [];
  }
}