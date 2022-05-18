import { Button } from "@mui/material";

export const programHeader = [
  { field: "programShortName", headerName: "Short Name", width: 150 },
  { field: "programFullName", headerName: "Long Name", width: 150 },
  { field: "programDescription", headerName: "Descrip", width: 150 },
  {
    field: "duration",
    headerName: "Duration (Years)",
    width: 150,
  },
  {
    field: "credits",
    headerName: "Credits",
    width: 150,
  },
  {
    field: "Action1",
    headerName: "Edit",
    width: 150,

    renderCell: (props) => (
      <>
        <Button
          onClick={() => {
            console.log(props.row.id);
          }}
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginLeft: 0 }}
        >
          Delete
        </Button>

        <Button
          onClick={() => {}}
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginLeft: 10 }}
        >
          Edit
        </Button>
      </>
    ),

    // renderCell: (props) => (
    //   <Button style={{backgroundColor:"green"}}
    //    >
    //     Test
    //   </Button>
    // ),
  },
];

export const programData = [
  {
    id: 1,
    program: "PhD (CS) HEC ",
    longName: "PhD in Computer Science",
    minSemester: " 6",
    maxSemester: "10",
    duration: "5",
    credits: "54",
  },
  {
    id: 2,
    program: "PhD (SE) HEC ",
    longName: "PhD in Software Engneering",
    minSemester: " 6",
    maxSemester: "10",
    duration: "5",
    credits: "54",
  },
  {
    id: 3,
    program: "PhD (CS) IH ",
    longName: "PhD in Computer Science",
    minSemester: " 4",
    maxSemester: "8",
    duration: "4",
    credits: "36",
  },
  {
    id: 4,
    program: "MS (IS) ",
    longName: "MS in Information Technology",
    minSemester: " 4",
    maxSemester: "8",
    duration: "4",
    credits: "36",
  },
  {
    id: 5,
    program: "PhD (AI) ",
    longName: "PhD in Artifitial Technology",
    minSemester: " 6",
    maxSemester: "10",
    duration: "5",
    credits: "54",
  },
];

export const sessionHeader = [
  {
    field: "id",
    headerName: "ID",
    width: 80,
  },
  {
    field: "Session",
    headerName: "Session",
    width: 300,
  },
  { field: "Description", headerName: "Description", width: 300 },
  { field: "Status", headerName: "Status", width: 300 },
];

export const sessionData = [
  {
    id: 1,
    Session: "Fall 2021 ",
    Description: "Fall 2021 PhD in Computer Science",
    Status: "OK",
  },
  {
    id: 2,
    Session: "Spring 2022 ",
    Description: "Spring 2022 PhD in Data Sciences",
    Status: "OK",
  },
  {
    id: 3,
    Session: "Fall 2022 ",
    Description: "Fall 2022 PhD in Artifitial Intellegence",
    Status: "OK",
  },
  {
    id: 4,
    Session: "Spring 2022 ",
    Description: "Spring 2023 PhD in Data Sciences",
    Status: "OK",
  },
  {
    id: 5,
    Session: "Spring 2022 ",
    Description: "Spring 2022 PhD in Computer Engineering",
    Status: "OK",
  },
];

export const facultyHeader = [
  {
    field: "id",
    headerName: "ID",
    width: 80,
  },
  {
    field: "Session",
    headerName: "Name",
    width: 300,
  },
  { field: "Description", headerName: "Designation", width: 300 },
  { field: "Status", headerName: "Email", width: 300 },
];

export const facultyData = [
  {
    id: 1,
    Session: "Prof.Dr.Sohail Asghar ",
    Description: "Professor",
    Status: "sohail.asghar@comsats.edu.pk",
  },
  {
    id: 2,
    Session: "Prof.Dr.Ali Pasha ",
    Description: "Professor",
    Status: "ali.pasha@comsats.edu.pk",
  },
  {
    id: 3,
    Session: "Prof.Dr.Nadeem Umer ",
    Description: "Professor",
    Status: "nadeem.umer@comsats.edu.pk",
  },
  {
    id: 4,
    Session: "Prof.Dr.Zainab Ali ",
    Description: "Professor",
    Status: "zainab.ali@comsats.edu.pk",
  },
  {
    id: 5,
    Session: "Prof.Dr.Ayesha Khalid ",
    Description: "Professor",
    Status: "ayesha.khalid@comsats.edu.pk",
  },
];

export const studentHeader = [
  {
    field: "id",
    headerName: "ID",
    width: 80,
  },
  {
    field: "Session",
    headerName: "Name",
    width: 300,
  },
  { field: "Description", headerName: "Registration No.", width: 300 },
  { field: "Status", headerName: "Email", width: 300 },
];

export const studentData = [
  {
    id: 1,
    Session: "Samina Mushtaq ",
    Description: "SP21-PCS-001",
    Status: "SP21-PCS-005@isbstudent.comsats.edu.pk",
  },
  {
    id: 2,
    Session: "Waseem Kiani",
    Description: "SP21-PCS-002",
    Status: "SP21-PCS-002@isbstudent.comsats.edu.pk",
  },
  {
    id: 3,
    Session: "Waqar Haris",
    Description: "SP21-PCS-003",
    Status: "SP21-PCS-003@isbstudent.comsats.edu.pk",
  },
  {
    id: 4,
    Session: "Rafia Rehman",
    Description: "SP21-PCS-004",
    Status: "SP21-PCS-004@isbstudent.comsats.edu.pk",
  },
  {
    id: 5,
    Session: "Rafia Rehman",
    Description: "SP21-PCS-005",
    Status: "SP21-PCS-005@isbstudent.comsats.edu.pk",
  },
];

export const progressHeader = [
  {
    field: "id",
    headerName: "ID",
    width: 80,
  },
  {
    field: "Session",
    headerName: "Student",
    width: 200,
  },
  { field: "Description", headerName: "Session", width: 200 },
  { field: "Status", headerName: "Status", width: 200 },
  { field: "Comments", headerName: "Comments", width: 400 },
];

export const progressData = [
  {
    id: 1,
    Session: "Muhammad Tahir Akram ",
    Description: "Fall 2021",
    Status: "Good",
    Comments: "Recommended for Registration in Fall 2023",
  },
  {
    id: 2,
    Session: "Raja Rizwan ",
    Description: "Spring 2022",
    Status: "Good",
    Comments: "Recommended for Registration in Fall 2023",
  },
  {
    id: 3,
    Session: "Malik Akram Dildar ",
    Description: "Fall 2022",
    Status: "Bad",
    Comments: "Not Recommended for Registration in Fall 2023",
  },
  {
    id: 4,
    Session: "Rizwan Ali",
    Description: "Spring 2022",
    Status: "Good",
    Comments: "Recommended for Registration in Fall 2023",
  },
  {
    id: 5,
    Session: "Junaid Khan",
    Description: "Spring 2022",
    Status: "Bad",
    Comments: "Not Recommended for Registration in Fall 2023",
  },
];

export const supervisorHeader = [
  {
    field: "id",
    headerName: "ID",
    width: 80,
  },
  { field: "Session", headerName: "Registration No.", width: 200 },
  { field: "Description", headerName: "Student Name", width: 300 },
  { field: "Status", headerName: "Faculty Member", width: 300 },
  { field: "Comments", headerName: "Designation", width: 200 },
];

export const supervisorData = [
  {
    id: 1,
    Session: "SP18-RCS-016 ",
    Description: "Muhammad Tahir Akram",
    Status: "Prof.Dr.Sohail Asghar",
    Comments: "Professor",
  },
  {
    id: 2,
    Session: "SP18-RCS-017 ",
    Description: "Basheer Cheema",
    Status: "Prof.Dr.Ali Pasha",
    Comments: "Professor",
  },
  {
    id: 3,
    Session: "SP18-RCS-018 ",
    Description: "Abdul Basit",
    Status: "Prof.Dr.Nadeem Umer",
    Comments: "Professor",
  },
  {
    id: 4,
    Session: "SP18-RCS-019 ",
    Description: "Sohail Khan",
    Status: "Prof.Dr.Ali Pasha",
    Comments: "Professor",
  },
  {
    id: 5,
    Session: "SP18-RCS-020 ",
    Description: "Basit Khan",
    Status: "Prof.Dr.Muhammad Tahir Akram",
    Comments: "Professor",
  },
];

export const notificationHeader = [
  {
    field: "id",
    headerName: "ID",
    width: 80,
  },
  { field: "Session", headerName: "Notification", width: 300 },
  { field: "Description", headerName: "Name", width: 300 },
  { field: "Status", headerName: "Registration No.", width: 250 },
  { field: "Comments", headerName: "Date", width: 250 },
];

export const notificationData = [
  {
    id: 1,
    Session: "Result Announnced!",
    Description: "Raja Hamza",
    Status: "SP18-RCS-023",
    Comments: "21-11-2021",
  },
  {
    id: 2,
    Session: "Fee Notice!",
    Description: "Dawood Sabiry",
    Status: "SP18-RCS-215",
    Comments: "24-2-2022",
  },
  {
    id: 3,
    Session: "Result Announnced!",
    Description: "Abdul Hadi",
    Status: "SP18-RCS-022",
    Comments: "15-06-2022",
  },
  {
    id: 4,
    Session: "Fee Notice!",
    Description: "Chaudry Zain",
    Status: "SP18-RCS-011",
    Comments: "18-06-2022",
  },
  {
    id: 5,
    Session: "Result Announnced!",
    Description: "Baakir Meer",
    Status: "SP18-RCS-009",
    Comments: "14-06-2022",
  },
];

export const supervisorWiseHeader = [
  {
    field: "id",
    headerName: "ID",
    width: 80,
  },
  {
    field: "Session",
    headerName: "Name",
    width: 200,
  },
  { field: "Description", headerName: "Registration No.", width: 200 },
  { field: "Status", headerName: "E-Mail", width: 350 },
  { field: "Comments", headerName: "Program", width: 300 },
];

export const supervisorWiseData = [
  {
    id: 1,
    Session: "Abdul Qadir ",
    Description: "SP18-RCS-112",
    Status: "SP21-PCS-005@isbstudent.comsats.edu.pk",
    Comments: "MS (CS)",
  },
  {
    id: 2,
    Session: "Muhammad Tahir Akram ",
    Description: "SP18-RCS-016",
    Status: "SP21-PCS-0016@isbstudent.comsats.edu.pk",
    Comments: "MS (AI)",
  },
  {
    id: 3,
    Session: "Munair Akhtar ",
    Description: "SP18-RCS-016",
    Status: "SP21-PCS-021@isbstudent.comsats.edu.pk",
    Comments: "MS (DS)",
  },
  {
    id: 4,
    Session: "Zahid Ali",
    Description: "SP18-RCS-143",
    Status: "SP21-PCS-305@isbstudent.comsats.edu.pk",
    Comments: "MS (SE)",
  },
  {
    id: 5,
    Session: "Anees",
    Description: "SP18-RCS-171",
    Status: "SP21-PCS-112@isbstudent.comsats.edu.pk",
    Comments: "MS (IT)",
  },
];

export const programWiseHeader = [
  {
    field: "id",
    headerName: "ID",
    width: 80,
  },
  {
    field: "Session",
    headerName: "Name",
    width: 200,
  },
  { field: "Description", headerName: "Registration No.", width: 200 },
  { field: "Status", headerName: "Email", width: 350 },
  { field: "Professor", headerName: "Professor", width: 300 },
  {
    field: "actions",
    headerName: "Action",
    width: 200,
    renderCell: (props) => (
      <>
        <Button
          /* onClick={() => {
            setselectedobj(props.row);
            handleOpen();
          }} */
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginLeft: 10 }}
        >
          Edit
        </Button>
      </>
    ),
  },
];

export const programWiseData = [
  {
    id: 1,
    Session: "Samina Mushtaq ",
    Description: "SP21-PCS-112",
    Status: "SP21-PCS-112@isbstudent.comsats.edu.pk",
    Professor: "Prof.Dr.Sohail Asghar",
  },
  {
    id: 2,
    Session: "Alina Ali ",
    Description: "SP21-PCS-121",
    Status: "SP21-PCS-121@isbstudent.comsats.edu.pk",
    Professor: "Prof.Dr.Ali Pasha",
  },
  {
    id: 3,
    Session: "Waheed Khan ",
    Description: "SP21-PCS-212",
    Status: "SP21-PCS-212@isbstudent.comsats.edu.pk",
    Professor: "Prof.Dr.Nadeem Umer",
  },
  {
    id: 4,
    Session: "Akram Ahmed",
    Description: "SP21-PCS-211",
    Status: "SP21-PCS-211@isbstudent.comsats.edu.pk",
    Professor: "Prof.Dr.Ali Pasha",
  },
  {
    id: 5,
    Session: "Junaid Seyaal ",
    Description: "SP21-PCS-323",
    Status: "SP21-PCS-323@isbstudent.comsats.edu.pk",
    Professor: "Prof.Dr.Sohail Asghar",
  },
];

export const synopsisWiseHeader = [
  {
    field: "id",
    headerName: "ID",
    width: 80,
  },
  {
    field: "Session",
    headerName: "Name",
    width: 300,
  },
  { field: "Description", headerName: "Registration No.", width: 300 },
  { field: "Status", headerName: "Email", width: 300 },
];

export const synopsisWiseData = [
  {
    id: 1,
    Session: "Khan ALi Khan ",
    Description: "SP21-PCS-111",
    Status: "SP21-PCS-111@isbstudent.comsats.edu.pk",
  },
  {
    id: 2,
    Session: "Zunair Arman",
    Description: "SP21-PCS-114",
    Status: "SP21-PCS-114@isbstudent.comsats.edu.pk",
  },
  {
    id: 3,
    Session: "Mushtaq Ali",
    Description: "SP21-PCS-122",
    Status: "SP21-PCS-122@isbstudent.comsats.edu.pk",
  },
  {
    id: 4,
    Session: "Javeria Batool ",
    Description: "SP21-PCS-121",
    Status: "SP21-PCS-121@isbstudent.comsats.edu.pk",
  },
  {
    id: 5,
    Session: "Ali Kiani",
    Description: "SP21-PCS-131",
    Status: "SP21-PCS-131@isbstudent.comsats.edu.pk",
  },
];

export const thesisWiseHeader = [
  {
    field: "id",
    headerName: "ID",
    width: 80,
  },
  {
    field: "Session",
    headerName: "Name",
    width: 300,
  },
  { field: "Description", headerName: "Registration No.", width: 300 },
  { field: "Status", headerName: "Email", width: 300 },
];

export const thesisWiseData = [
  {
    id: 1,
    Session: "Ayesha ALi",
    Description: "SP21-PCS-123",
    Status: "SP21-PCS-123@isbstudent.comsats.edu.pk",
  },
  {
    id: 2,
    Session: "Samina Mushtaq ",
    Description: "SP21-PCS-005",
    Status: "SP21-PCS-005@isbstudent.comsats.edu.pk",
  },
  {
    id: 3,
    Session: "Bushra Bibi ",
    Description: "SP21-PCS-321",
    Status: "SP21-PCS-321@isbstudent.comsats.edu.pk",
  },
  {
    id: 4,
    Session: "Babar Khan ",
    Description: "SP21-PCS-231",
    Status: "SP21-PCS-231@isbstudent.comsats.edu.pk",
  },
  {
    id: 5,
    Session: "Kalaam Khan ",
    Description: "SP21-PCS-132",
    Status: "SP21-PCS-132@isbstudent.comsats.edu.pk",
  },
];

export const sessionWiseHeader = [
  {
    field: "id",
    headerName: "ID",
    width: 80,
  },
  {
    field: "Session",
    headerName: "Name",
    width: 200,
  },
  { field: "Description", headerName: "Registration No.", width: 200 },
  { field: "Status", headerName: "Email", width: 350 },
  { field: "Professor", headerName: "Professor", width: 300 },
];

export const sessionWiseData = [
  {
    id: 1,
    Session: "Rizwan Khan ",
    Description: "SP21-PCS-006",
    Status: "SP21-PCS-006@isbstudent.comsats.edu.pk",
    Professor: "Prof.Dr.Sohail Asghar",
  },
  {
    id: 2,
    Session: "Multan Kiani ",
    Description: "SP21-PCS-115",
    Status: "SP21-PCS-115@isbstudent.comsats.edu.pk",
    Professor: "Prof.Dr.Ali Pahsa",
  },
  {
    id: 3,
    Session: "Samina Mushtaq ",
    Description: "SP21-PCS-001",
    Status: "SP21-PCS-001@isbstudent.comsats.edu.pk",
    Professor: "Prof.Dr.Nadeem Umer",
  },
  {
    id: 4,
    Session: "Sameer Ishtiaq ",
    Description: "SP21-PCS-033",
    Status: "SP21-PCS-033@isbstudent.comsats.edu.pk",
    Professor: "Prof.Dr.Ali Pahsa",
  },
  {
    id: 5,
    Session: "Sara tariq ",
    Description: "SP21-PCS-005",
    Status: "SP21-PCS-005@isbstudent.comsats.edu.pk",
    Professor: "Prof.Dr.Nadeem Umer",
  },
];
export const viewAnnouncementHeader = [
  {
    field: "id",
    headerName: "ID",
    width: 80,
  },
  {
    field: "Session",
    headerName: "Announcement",
    width: 400,
  },
  { field: "Description", headerName: "Date", width: 400 },
];

export const viewAnnouncementeData = [
  {
    id: 1,
    Session: "Admission Open!",
    Description: "1/2/2022",
  },
  {
    id: 2,
    Session: "Datesheet is Uploaded!",
    Description: "3/1/2022",
  },
  {
    id: 3,
    Session: "Last Date of Fee Submission!",
    Description: "4/3/2022",
  },
  {
    id: 4,
    Session: "Results Announcments!",
    Description: "3/1/2022",
  },
  {
    id: 5,
    Session: "Classes Schedule!",
    Description: "2/4/2022",
  },
];

export const viewNotificationHeader = [
  {
    field: "id",
    headerName: "ID",
    width: 80,
  },
  {
    field: "Session",
    headerName: "Notification",
    width: 400,
  },
  { field: "Description", headerName: "Date", width: 400 },
];

export const viewNotificationData = [
  {
    id: 1,
    Session: "Assignment due today",
    Description: "3/1/2022",
  },
  {
    id: 2,
    Session: "AI class Cancelled",
    Description: "4/1/2022",
  },
  {
    id: 3,
    Session: "Physics Class is Cancelled",
    Description: "3/5/2022",
  },
  {
    id: 4,
    Session: "Surprise Quiz",
    Description: "4/6/2022",
  },
  {
    id: 5,
    Session: "Datesheet Uploaded",
    Description: "1/2/2022",
  },
];

export const synopsisReportData = {
  candidateName: "Waqas Zafar",
  registrationNumber: "FA18-BCS-107",
  supervisor: "Dr. Nadeem Javaid",
  dated: "Mar 18, 2022",
  synopsisTitle:
    "Efficient Electricity Theft Detection in Smart Grids using Data Driven Models",
  recommendations: [
    {
      comment:
        'The problem statement focuses on class imbalance, dimension reduction. These are generic issues. Rather the candidate should focus on the limitations of the techniques in literature. The manuscipt is written in a bt informal way. For example in the sentence "Therefore, ETD is an important thing and needs immediate attention to avoid ever-increasing electricity theft rate. Keeping this" avoid using the words like "thing" etc. Comparisons should be done with the relevant baseline techniques rather than any arbitrary techniques. Discussion on handling the identical issues should be is a way such that they are aligned with the objectives of the proposed research.',
      evaluatorName: "Dr. Assad Abbas",
      evaluationStatus: "Minor Changings",
      isRequiredAgain: "No",
    },
    {
      comment:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      evaluatorName: "Dr. Basit Raza",
      evaluationStatus: "Major Changings",
      isRequiredAgain: "Yes",
    },
  ],
};
export const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
