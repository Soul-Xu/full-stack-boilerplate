// public class ItilIncidentVo {
//   /**
//    * 记录主键
//    */
//   @ApiModelProperty("主键")
//   private String fdId;

//   //-------------------基本信息-------------------------
//   /**
//    * 标题
//    */
//   @ApiModelProperty("标题")
//   private String fdSubject;
//   /**
//    * 描述
//    */
//   private String fdDesc;
//   /**
//    * 编号
//    */
//   private String fdNo;
//   /**
//    * 登记人
//    */
//   private IdNameProperty fdAuthor;
//   /**
//    * 登记时间
//    */
//   private Date fdInputTime;

//   /**
//    * 发现渠道
//    */
//   private String fdFindWay;
//   /**
//    * 报告人
//    */
//   private  IdNameProperty fdReportor;

//   //-------------------处理信息-------------------------

//   /**
//    * 状态
//    */
//   private String fdStatus;

//   /**
//    * 影响系统
//    */
//   private String fdEffectSystem;

//   /**
//    * 处理组
//    */
//   private IdNameProperty fdProcessDept;

//   /**
//    * 子类
//    */
//   private String fdSubCate;
//   /**
//    * 发现时间
//    */
//   private Date fdFindTime;
//   /**
//    * 发生时间
//    */
//   private Date fdHappendTime;
//   /**
//    * 上报时间
//    */
//   private Date fdReportTime;
//   /**
//    * 处理人
//    */
//   private IdNameProperty fdProcessUser;
//   /**
//    * 区域
//    */
//   private String fdArea;
//   /**
//    * 影响
//    */
//   private String fdEffect;
//   /**
//    * 优先级
//    */
//   private String fdPriority;
//   /**
//    * 紧急程度
//    */
//   private String fdUrgency;
//   /**
//    * 处理完成时间
//    */
//   private Date fdFinishTime;

//   /**
//    * 问题解决时间
//    */
//   private Date fdsolveTime;

//   //-------------------原因分析-------------------------
//   /**
//    * 原因分类
//    */
//   private String fdReasonType;
//   /**
//    * 做得好及幸运的地方
//    */
//   private String fdWellDone;
//   /**
//    * 触发条件及原因分析
//    */
//   private String fdReason;

//   //-------------------恢复过程-------------------------
//   /**
//    * 恢复代码
//    */
//   private String fdRestoreCode;
//   /**
//    * 潜在问题
//    */
//   private Boolean fdHasProblem;
//   /**
//    * 恢复过程描述
//    */
//   private String fdRestoreDesc;
//   /**
//    * 可用性影响初步评估
//    */
//   private String fdEffectEstimate;
//   /**
//    * 跟进团队
//    */
//   private IdNameProperty fdFollowTeam;

//   /**
//    * 可用性跟进人
//    */
//   private IdNameProperty fdFollowUser;
//   /**
//    * 协助跟进团队
//    */
//   private IdNameProperty fdAssistTeam;
//   /**
//    * 业务恢复时间
//    */
//   private Date fdRestoreTime;
//   /**
//    * 受影响时长
//    */
//   private Integer fdEffectDuration;
//   /**
//    * 可用性定级
//    */
//   private String fdUsabilityLevel;
//   /**
//    * 业务影响比例
//    */
//   private Double fdEffectPercent;
//   /**
//    * 责任团队及承担比例
//    */
//   private Double fdBearPercent;
//   /**
//    * 业务影响概述
//    */
//   private String fdEffectDesc;

//   //-------------------影响分析-------------------------
//   /**
//    * 合法合规
//    */
//   private String fdLegal;

//   /**
//    * 公司业务
//    */
//   private String fdBusiness;
//   /**
//    *信息系统
//    */
//   private String fdItSystem;
//   /**
//    *影响声誉
//    */
//   private String fdReputation;
//   /**
//    * 其他
//    */
//   private String fdOther;

//   //-------------------流程信息-------------------------
//   private Map<String,Object> fdBPMInfo;
//   /**
//    * 附件列表信息
//    */
//   private List<Map<String,Object>> fdAttachInfo;
// }