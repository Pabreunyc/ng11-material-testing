import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-test',
  templateUrl: './grid-test.component.html',
  styleUrls: ['./grid-test.component.css']
})
export class GridTestComponent implements OnInit, OnDestroy {
  public files = data;
  constructor() { }

  ngOnInit(): void {
    console.log('%cGridTestComponent', 'background-color:green;color:white;');
  }
  ngOnDestroy(): void {
    console.log('%cGridTestComponent', 'background-color:red;color:black;');
  }
}

const data = [ 
  { 
  "id":2,
  "ticketId":0,
  "commentId":2,
  "userId":1957,
  "filename":"tbl_hd_attachments.sql",
  "filetype":"application/octet-stream",
  "filesize":1133,
  "filepath":"file:///F:/sahd/paul_abreu_1621626427392_tbl_hd_attachments.sql",
  "dateCreated":"2021-05-21 15:47:07"
  },
  { 
  "id":4,
  "ticketId":0,
  "commentId":3,
  "userId":449,
  "filename":"List_of_contract_drawings_template-JM.xlsx",
  "filetype":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "filesize":18353,
  "filepath":"file:///F:/sahd/6/junhyung_kim_20210526_List_of_contract_drawings_template-JM.xlsx",
  "dateCreated":"2021-05-26 14:16:59"
  },
  { 
  "id":5,
  "ticketId":0,
  "commentId":4,
  "userId":449,
  "filename":"Copy of drawings_401-rows.xls",
  "filetype":"application/vnd.ms-excel",
  "filesize":95744,
  "filepath":"file:///F:/sahd/6/junhyung_kim_20210526_Copy%20of%20drawings_401-rows.xls",
  "dateCreated":"2021-05-26 15:46:12"
  },
  { 
  "id":8,
  "ticketId":0,
  "commentId":17,
  "userId":449,
  "filename":"List_of_contract_drawings_template-JM.xlsx",
  "filetype":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "filesize":18353,
  "filepath":"file:///S:/web_dev/sahd/15/junhyung_kim_20210707_List_of_contract_drawings_template-JM.xlsx",
  "dateCreated":"2021-07-07 10:23:36"
  },
  { 
  "id":9,
  "ticketId":0,
  "commentId":18,
  "userId":449,
  "filename":"List_OK.xlsx",
  "filetype":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "filesize":17965,
  "filepath":"file:///S:/web_dev/sahd/12/junhyung_kim_20210714_List_OK.xlsx",
  "dateCreated":"2021-07-14 14:27:38"
  },
  { 
  "id":10,
  "ticketId":0,
  "commentId":20,
  "userId":1302,
  "filename":"full-screen-clip.png",
  "filetype":"image/png",
  "filesize":2087594,
  "filepath":"file:///F:/sahd/9/marie_persaud_20210723_full-screen-clip.png",
  "dateCreated":"2021-07-23 09:37:46"
  },
  { 
  "id":13,
  "ticketId":19,
  "commentId":45,
  "userId":449,
  "filename":"CBG_Test_Document.pdf",
  "filetype":"application/pdf",
  "filesize":189258,
  "filepath":"file:///S:/web_dev/sahd/19/junhyung_kim_20210813_CBG_Test_Document.pdf",
  "dateCreated":"2021-08-13 11:28:18"
  },
  { 
  "id":16,
  "ticketId":27,
  "commentId":60,
  "userId":135,
  "filename":"AutoCAD How to - Import DPR Page Setups with Page Setup Manager 20200605.pdf",
  "filetype":"application/pdf",
  "filesize":119882,
  "filepath":"file:///S:/web_dev/sahd/27/carl_snyder_20210820_AutoCAD%20How%20to%20-%20Import%20DPR%20Page%20Setups%20with%20Page%20Setup%20Manager%2020200605.pdf",
  "dateCreated":"2021-08-20 08:30:38"
  },
  { 
  "id":18,
  "ticketId":29,
  "commentId":61,
  "userId":1758,
  "filename":"An attachment2.PNG",
  "filetype":"image/png",
  "filesize":3721,
  "filepath":"file:///S:/web_dev/sahd/29/aaron_mok_20210820_An%20attachment2.PNG",
  "dateCreated":"2021-08-20 15:54:01"
  },
  { 
  "id":22,
  "ticketId":33,
  "commentId":72,
  "userId":16,
  "filename":"BG-38400-110M.pdf",
  "filetype":"application/pdf",
  "filesize":861000,
  "filepath":"file:///S:/web_dev/sahd/33/alana_lord_20210823_BG-38400-110M.pdf",
  "dateCreated":"2021-08-23 10:40:18"
  },
  { 
  "id":26,
  "ticketId":36,
  "commentId":76,
  "userId":561,
  "filename":"Fulton Park 2.18.20.pdf",
  "filetype":"application/pdf",
  "filesize":107826,
  "filepath":"file:///S:/web_dev/sahd/36/maritza_lucia_20210823_Fulton%20Park%202.18.20.pdf",
  "dateCreated":"2021-08-23 11:25:11"
  },
  { 
  "id":27,
  "ticketId":37,
  "commentId":78,
  "userId":561,
  "filename":"Fulton Park 2.18.20.pdf",
  "filetype":"application/pdf",
  "filesize":107826,
  "filepath":"file:///S:/web_dev/sahd/37/maritza_lucia_20210823_Fulton%20Park%202.18.20.pdf",
  "dateCreated":"2021-08-23 11:32:38"
  },
  { 
  "id":31,
  "ticketId":41,
  "commentId":91,
  "userId":257,
  "filename":"X045-218M_846 P-1ANCH02_AD.pdf",
  "filetype":"application/pdf",
  "filesize":554807,
  "filepath":"file:///S:/web_dev/sahd/41/elojan_abreu_20210823_X045-218M_846%20P-1ANCH02_AD.pdf",
  "dateCreated":"2021-08-23 14:20:42"
  },
  { 
  "id":37,
  "ticketId":46,
  "commentId":97,
  "userId":257,
  "filename":"X045-218M_846 P-1ANCH02_AD.pdf",
  "filetype":"application/pdf",
  "filesize":554807,
  "filepath":"file:///S:/web_dev/sahd/46/elojan_abreu_20210823_X045-218M_846%20P-1ANCH02_AD.pdf",
  "dateCreated":"2021-08-23 14:38:37"
  },
  { 
  "id":38,
  "ticketId":45,
  "commentId":98,
  "userId":257,
  "filename":"X045-218M_846 P-1ANCH02_AD.pdf",
  "filetype":"application/pdf",
  "filesize":554807,
  "filepath":"file:///S:/web_dev/sahd/45/elojan_abreu_20210823_X045-218M_846%20P-1ANCH02_AD.pdf",
  "dateCreated":"2021-08-23 14:42:54"
  },
  { 
  "id":39,
  "ticketId":43,
  "commentId":100,
  "userId":193,
  "filename":"846 P-112SETW Seton Fall Park Fence 846-20-34.pdf",
  "filetype":"application/pdf",
  "filesize":116642,
  "filepath":"file:///S:/web_dev/sahd/43/damien_ramseur_20210823_846%20P-112SETW%20Seton%20Fall%20Park%20Fence%20846-20-34.pdf",
  "dateCreated":"2021-08-23 15:00:45"
  },
  { 
  "id":43,
  "ticketId":29,
  "commentId":106,
  "userId":1884,
  "filename":"update attachment.PNG",
  "filetype":"image/png",
  "filesize":3503,
  "filepath":"file:///S:/web_dev/sahd/29/seamus_moloney_20210823_update%20attachment.PNG",
  "dateCreated":"2021-08-23 15:45:24"
  },
  { 
  "id":44,
  "ticketId":29,
  "commentId":108,
  "userId":1758,
  "filename":"a testing document.docx",
  "filetype":"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "filesize":12046,
  "filepath":"file:///S:/web_dev/sahd/29/aaron_mok_20210823_a%20testing%20document.docx",
  "dateCreated":"2021-08-23 15:57:14"
  },
  { 
  "id":45,
  "ticketId":51,
  "commentId":110,
  "userId":16,
  "filename":"TEST-PDF.pdf",
  "filetype":"application/pdf",
  "filesize":133484,
  "filepath":"file:///S:/web_dev/sahd/51/alana_lord_20210824_TEST-PDF.pdf",
  "dateCreated":"2021-08-24 08:44:53"
  },
  { 
  "id":53,
  "ticketId":58,
  "commentId":124,
  "userId":179,
  "filename":"An attachment.PNG",
  "filetype":"image/png",
  "filesize":2641,
  "filepath":"file:///S:/web_dev/sahd/58/christopher_zurita_20210824_An%20attachment.PNG",
  "dateCreated":"2021-08-24 12:42:32"
  },
  { 
  "id":55,
  "ticketId":57,
  "commentId":125,
  "userId":449,
  "filename":"RE Helpdesk Test - Staging Environment.msg",
  "filetype":"application/octet-stream",
  "filesize":406528,
  "filepath":"file:///S:/web_dev/sahd/57/junhyung_kim_20210824_RE%20Helpdesk%20Test%20-%20Staging%20Environment.msg",
  "dateCreated":"2021-08-24 13:31:51"
  },
  { 
  "id":60,
  "ticketId":65,
  "commentId":128,
  "userId":561,
  "filename":"P-1ARAELV_X360-121M_Capital Budget Office CP Review Memo .pdf",
  "filetype":"application/pdf",
  "filesize":31635,
  "filepath":"file:///S:/web_dev/sahd/65/maritza_lucia_20210824_P-1ARAELV_X360-121M_Capital%20Budget%20Office%20CP%20Review%20Memo%20.pdf",
  "dateCreated":"2021-08-24 14:51:12"
  },
  { 
  "id":62,
  "ticketId":66,
  "commentId":133,
  "userId":561,
  "filename":"P-1ARAELV_X360-121M_Capital Budget Office CP Review Memo .pdf",
  "filetype":"application/pdf",
  "filesize":31635,
  "filepath":"file:///S:/web_dev/sahd/66/maritza_lucia_20210824_P-1ARAELV_X360-121M_Capital%20Budget%20Office%20CP%20Review%20Memo%20.pdf",
  "dateCreated":"2021-08-24 15:08:29"
  },
  { 
  "id":63,
  "ticketId":66,
  "commentId":134,
  "userId":561,
  "filename":"SANDY4-44  P-4SHRESA Q163-120M_Capital Budget Office CP Review Memo.pdf",
  "filetype":"application/pdf",
  "filesize":31702,
  "filepath":"file:///S:/web_dev/sahd/66/maritza_lucia_20210824_SANDY4-44%20%20P-4SHRESA%20Q163-120M_Capital%20Budget%20Office%20CP%20Review%20Memo.pdf",
  "dateCreated":"2021-08-24 15:09:13"
  },
  { 
  "id":66,
  "ticketId":67,
  "commentId":136,
  "userId":561,
  "filename":"P-2BELTPE_BG-119M_Capital Budget Office CP Review Memo.pdf",
  "filetype":"application/pdf",
  "filesize":31682,
  "filepath":"file:///S:/web_dev/sahd/67/maritza_lucia_20210824_P-2BELTPE_BG-119M_Capital%20Budget%20Office%20CP%20Review%20Memo.pdf",
  "dateCreated":"2021-08-24 15:12:06"
  },
  { 
  "id":67,
  "ticketId":68,
  "commentId":140,
  "userId":1969,
  "filename":"An empty email.msg",
  "filetype":"application/octet-stream",
  "filesize":25088,
  "filepath":"file:///S:/web_dev/sahd/68/jessica_merkl_20210824_An%20empty%20email.msg",
  "dateCreated":"2021-08-24 15:24:53"
  },
  { 
  "id":71,
  "ticketId":75,
  "commentId":151,
  "userId":193,
  "filename":"RE_ Design DSN-000001 is sent to you for 01A New Design_.msg",
  "filetype":"application/octet-stream",
  "filesize":139264,
  "filepath":"file:///S:/web_dev/sahd/75/damien_ramseur_20210825_RE_%20Design%20DSN-000001%20is%20sent%20to%20you%20for%2001A%20New%20Design_.msg",
  "dateCreated":"2021-08-25 11:11:40"
  },
  { 
  "id":72,
  "ticketId":76,
  "commentId":153,
  "userId":193,
  "filename":"B128-115MA edit.pdf",
  "filetype":"application/pdf",
  "filesize":4929442,
  "filepath":"file:///S:/web_dev/sahd/76/damien_ramseur_20210825_B128-115MA%20edit.pdf",
  "dateCreated":"2021-08-25 11:16:30"
  },
  { 
  "id":73,
  "ticketId":76,
  "commentId":154,
  "userId":193,
  "filename":"P002 Micropurchases.pdf",
  "filetype":"application/pdf",
  "filesize":825392,
  "filepath":"file:///S:/web_dev/sahd/76/damien_ramseur_20210825_P002%20Micropurchases.pdf",
  "dateCreated":"2021-08-25 11:18:03"
  },
  { 
  "id":76,
  "ticketId":68,
  "commentId":165,
  "userId":1758,
  "filename":"Large spec.doc",
  "filetype":"application/msword",
  "filesize":363008,
  "filepath":"file:///S:/web_dev/sahd/68/aaron_mok_20210825_Large%20spec.doc",
  "dateCreated":"2021-08-25 15:09:26"
  },
  { 
  "id":77,
  "ticketId":68,
  "commentId":166,
  "userId":1758,
  "filename":"Large spec.doc",
  "filetype":"application/msword",
  "filesize":363008,
  "filepath":"file:///S:/web_dev/sahd/68/aaron_mok_20210825_Large%20spec.doc",
  "dateCreated":"2021-08-25 15:19:52"
  },
  { 
  "id":78,
  "ticketId":68,
  "commentId":167,
  "userId":1758,
  "filename":"'L;ar`ge-s~pec_=+)(&^%$.doc",
  "filetype":"application/msword",
  "filesize":363008,
  "filepath":"file:///S:/web_dev/sahd/68/aaron_mok_20210825_'L;ar%60ge-s~pec_=+)(&^%25$.doc",
  "dateCreated":"2021-08-25 15:21:32"
  },
  { 
  "id":79,
  "ticketId":68,
  "commentId":171,
  "userId":1969,
  "filename":"Picture.PNG",
  "filetype":"image/png",
  "filesize":6018,
  "filepath":"file:///S:/web_dev/sahd/68/jessica_merkl_20210825_Picture.PNG",
  "dateCreated":"2021-08-25 15:34:41"
  },
  { 
  "id":80,
  "ticketId":68,
  "commentId":172,
  "userId":1969,
  "filename":"M233-120M_AZ_202108231508_LAN.alex.zervos.zip",
  "filetype":"application/x-zip-compressed",
  "filesize":14561373,
  "filepath":"file:///S:/web_dev/sahd/68/jessica_merkl_20210825_M233-120M_AZ_202108231508_LAN.alex.zervos.zip",
  "dateCreated":"2021-08-25 15:35:53"
  },
  { 
  "id":81,
  "ticketId":81,
  "commentId":176,
  "userId":1969,
  "filename":"Time.PNG",
  "filetype":"image/png",
  "filesize":2558,
  "filepath":"file:///S:/web_dev/sahd/81/jessica_merkl_20210826_Time.PNG",
  "dateCreated":"2021-08-26 15:06:31"
  },
  { 
  "id":82,
  "ticketId":83,
  "commentId":178,
  "userId":1969,
  "filename":"An attachment4.PNG",
  "filetype":"image/png",
  "filesize":11012,
  "filepath":"file:///S:/web_dev/sahd/83/jessica_merkl_20210826_An%20attachment4.PNG",
  "dateCreated":"2021-08-26 15:33:19"
  },
  { 
  "id":84,
  "ticketId":84,
  "commentId":180,
  "userId":1292,
  "filename":"half help.PNG",
  "filetype":"image/png",
  "filesize":2109,
  "filepath":"file:///S:/web_dev/sahd/84/abigail_chatfield_20210826_half%20help.PNG",
  "dateCreated":"2021-08-26 15:58:03"
  },
  { 
  "id":85,
  "ticketId":90,
  "commentId":197,
  "userId":1884,
  "filename":"Tree.PNG",
  "filetype":"image/png",
  "filesize":6018,
  "filepath":"file:///S:/web_dev/sahd/90/seamus_moloney_20210903_Tree.PNG",
  "dateCreated":"2021-09-03 12:20:11"
  },
  { 
  "id":86,
  "ticketId":90,
  "commentId":198,
  "userId":1884,
  "filename":"Tree removed.PNG",
  "filetype":"image/png",
  "filesize":6018,
  "filepath":"file:///S:/web_dev/sahd/90/seamus_moloney_20210903_Tree%20removed.PNG",
  "dateCreated":"2021-09-03 12:30:01"
  },
  { 
  "id":89,
  "ticketId":92,
  "commentId":200,
  "userId":449,
  "filename":"List_of_contract_drawings_template-JM.xlsx",
  "filetype":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "filesize":18353,
  "filepath":"file:///S:/web_dev/sahd/92/junhyung_kim_20210904_List_of_contract_drawings_template-JM.xlsx",
  "dateCreated":"2021-09-04 11:41:32"
  },
  { 
  "id":90,
  "ticketId":92,
  "commentId":201,
  "userId":449,
  "filename":"CBG_Test_Document.pdf",
  "filetype":"application/pdf",
  "filesize":189258,
  "filepath":"file:///S:/web_dev/sahd/92/junhyung_kim_20210907_CBG_Test_Document.pdf",
  "dateCreated":"2021-09-07 11:35:46"
  }];