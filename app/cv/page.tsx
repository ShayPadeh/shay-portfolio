export default function CVPage() {
  return (
    <div className="px-5 md:px-16 py-10 md:py-20" dir="rtl">
      {/* Name & contact */}
      <div className="text-center mb-14">
        <h1 className="text-[15px] tracking-[0.25em] font-medium mb-4">שי פדה</h1>
        <p className="text-[11px] tracking-[0.12em] text-neutral-500">
          נייד: 0542023472 &nbsp;|&nbsp;{" "}
          <a href="mailto:shaypadeh196@gmail.com" className="hover:text-black transition-colors">
            shaypadeh196@gmail.com
          </a>
        </p>
      </div>

      {/* Work experience */}
      <section className="mb-10">
        <h2 className="text-[11px] tracking-[0.35em] uppercase font-medium mb-6 pb-1 border-b border-neutral-200">
          ניסיון תעסוקתי
        </h2>

        <CvEntry dates="2024 – היום" title="צוות סטודיו, ישר אדריכלים">
          <CvBullet>הובלת תהליכי תכנון — אחריות לניהול וקידום פרויקטים משלב הקונספט והבדיקות הראשוניות ועד לתכנון מפורט לביצוע, תוך ראייה עיצובית כוללת וירידה לפרטים טכניים.</CvBullet>
          <CvBullet>עבודה ישירה מול דרג בכיר — התנהלות עצמאית ושוטפת מול שותפי המשרד, יזמים ויועצים חיצוניים, תוך הצגת הפרויקט וקידום פתרונות תכנוניים מורכבים.</CvBullet>
          <CvBullet>מנהיגות וחניכה מקצועית — תפקוד כדמות מפתח בצוות הסטודיו, כולל אחריות על חפיפת עובדים חדשים, הדרכתם והטמעת סטנדרטים מקצועיים.</CvBullet>
          <CvBullet>חדשנות ומומחיות טכנולוגית — שליטה ברמה גבוהה בכלי תכנון ומידול (Revit, Rhino+Grasshopper, SketchUp) ושילוב כלי AI והדמיות לייעול והעשרת תהליך התכנון.</CvBullet>
        </CvEntry>

        <CvEntry dates="2019 – 2021" title="ניהול מסעדת MUMA, קריית ענבים">
          <CvBullet>ניהול צוות המונה כ-40 איש.</CvBullet>
          <CvBullet>ניהול מדור שירות הלקוחות ואחריות על פרסום תכנים שיווקיים ברשתות החברתיות ובמדיות נוספות.</CvBullet>
          <CvBullet>עיצוב המסעדה.</CvBullet>
          <CvBullet>אחריות על הקשר מול כלל הגורמים החיצוניים (ספקים, מנהלי אירועים, גורמים עירוניים וממשלתיים).</CvBullet>
        </CvEntry>

        <CvEntry dates="2019 – 2021" title="ניהול קבוצת צהרון ילדים, גן עופרים, מבשרת ציון">
          <CvBullet>הובלת קבוצה המונה 30 ילדים ו-3 אנשי צוות.</CvBullet>
          <CvBullet>ניהול סידור העבודה.</CvBullet>
          <CvBullet>מעקב על תכני החינוך שמועברים במהלך השבוע.</CvBullet>
        </CvEntry>

        <CvEntry dates="2019" title="פרויקט זמני: בניית תיק תיעוד לבניין לשימור — רחוב ציפורי 4, טבריה">
          <CvBullet>איסוף ומיון החומרים הרלוונטיים לתיק התיעוד (עבודה מול היסטוריונית, חיפוש חומרים עצמאי באינטרנט).</CvBullet>
          <CvBullet>הכנת מצגת עבור אגף הנדסה ובינוי של עיריית טבריה ועבור מהנדס העיר טבריה.</CvBullet>
        </CvEntry>
      </section>

      {/* Military */}
      <section className="mb-10">
        <h2 className="text-[11px] tracking-[0.35em] uppercase font-medium mb-6 pb-1 border-b border-neutral-200">
          שירות צבאי
        </h2>
        <CvEntry dates="2017 – 2019" title="מפקדת כיתת טירונים ומפתחת הדרכה בהשלמה לקצונה. שחרור בדרגת סמל.">
          <CvBullet>פיקוד על כיתה המונה 20 חיילים ויותר.</CvBullet>
          <CvBullet>ביצוע הדרכות ופרזנטציות מקצועיות לצוערים בהשלמה לקצונה ולדרגות הבכירות ביותר, הדורשות יכולת התנסחות גבוהה בעל פה ובכתב.</CvBullet>
          <CvBullet>הובלת מספר פרויקטים במקביל אשר דרשו עבודה אינטנסיבית, זמינות תמידית ויכולת התמודדות עם לחץ ועומס.</CvBullet>
        </CvEntry>
      </section>

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-[11px] tracking-[0.35em] uppercase font-medium mb-6 pb-1 border-b border-neutral-200">
          השכלה
        </h2>

        <CvEntry dates="2025 – היום" title="אוניברסיטת תל אביב, תואר שני באדריכלות, דגש על תכנון עירוני" />

        <CvEntry dates="2020 – 2025" title="אוניברסיטת תל אביב, תואר ראשון באדריכלות (ממוצע ציונים בתואר: 93.2)">
          <CvBullet>מצטיינת דיקן לשנת תשפ&quot;א ותשפ&quot;ג.</CvBullet>
          <CvBullet>קבלת מלגת הצטיינות מהפקולטה לאומנויות (14 סטודנטים הלומדים בפקולטה נבחרו לקבלת המלגה).</CvBullet>
        </CvEntry>

        <CvEntry dates="2020" title="המכללה למנהל, בוגרת מכינה ללימודי עיצוב פנים" />

        <CvEntry dates="2013 – 2016" title="תיכון הראל מבשרת ציון. 5 יח&quot;ל אנגלית, 4 יח&quot;ל מתמטיקה. הרחבה במקצועות ביולוגיה וספרות 5 יח&quot;ל כ&quot;א. ממוצע בגרות: 113" />
      </section>

      {/* Skills */}
      <section className="mb-14">
        <h2 className="text-[11px] tracking-[0.35em] uppercase font-medium mb-6 pb-1 border-b border-neutral-200">
          מיומנויות נוספות
        </h2>
        <div className="space-y-3 text-[11px] tracking-[0.08em] text-neutral-700 leading-6">
          <p>
            <span className="font-medium">יישומי מחשב:</span> שליטה מלאה ביישומי Microsoft Office וביישומי Adobe ובתוכנות Rhino, Revit, AutoCAD, SketchUp, Grasshopper.
          </p>
          <p>
            <span className="font-medium">שפות:</span> עברית – שפת אם. אנגלית – שליטה מלאה. ספרדית – שליטה בסיסית.
          </p>
        </div>
      </section>

      {/* Back to top */}
      <div className="text-center mt-4" dir="ltr">
        <a
          href="#"
          className="text-[10px] tracking-[0.3em] text-neutral-400 hover:text-black transition-colors uppercase"
        >
          ↑ Back to Top
        </a>
      </div>
    </div>
  );
}

function CvEntry({
  dates,
  title,
  children,
}: {
  dates: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex gap-6">
      <span className="text-[10px] tracking-[0.08em] text-neutral-400 whitespace-nowrap pt-[2px] min-w-[90px]">
        {dates}
      </span>
      <div className="flex-1">
        <p className="text-[11px] tracking-[0.08em] font-medium leading-6">{title}</p>
        {children && <ul className="mt-2 space-y-1">{children}</ul>}
      </div>
    </div>
  );
}

function CvBullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="text-[11px] tracking-[0.06em] text-neutral-600 leading-6 flex gap-2">
      <span className="text-neutral-300 mt-[1px]">•</span>
      <span>{children}</span>
    </li>
  );
}
