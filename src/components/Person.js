import React from 'react';
import './PersonComponent.css'; // Make sure to adjust the path

const PersonComponent = ({imgsrc,altname}) => {
  return (
    <div className="person">
      <div className="person-container">
        <img
          className="person-bg"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0IDQ0NBwcHDQ0HBwcHDQ8IDQcNFREWFhURExMYHSggGBolJxMVITEhMSkrLi4uFx8zODMsNygtLisBCgoKDQ0NFQ8PFS0ZFRkrKysrKzcrLS0tLS0rNystKy0rNy0rKysrLSsrKysrKysrKy03KysrKysrKy0rKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAf/xAAYEAEBAQEBAAAAAAAAAAAAAAAAARECEv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAERAhL/2gAMAwEAAhEDEQA/APhoCgAAAAAAAAAoAoIoAFAEFAQUBBUAAQAAAAAEAAAAABQAAAABQQUUAAAAAFwADAAMQAMUATARQEFAQBAAAAAAQBRoRQAAAAMAIq4IKYuIguC4IoGAAuAAYCKGCCiYILgmCCiYqAIIKiAAAACio1gCi4BgGALguIgYuNYGJjWGLgmGLhi4Jhii+RMMVDyGGKHlNTADFMMFxMEwxRMGRcMTBBcSs2KgqM2AAgAINYA7YAuGLghi4siyCYYuGLgmEi4YvkBcMa8mIYuGL5EwxcMXyiYY1hi+TGcMawxfJjOGNYYnkZwxrExPImC4YnlUTGkZ8iYjSMWCYilZsERRiwQUQbwxrDHp8riYY1hi+TGcWRqQxcXGcXGsWRrDGMMbxZFnJjni43hjU5XGMMdMMa8pjnhjphi+TGMMbwxfJjGGN4YvkxjDG8MTyYxhjeJiXkxnExvExnyYxhjeJjF5THPDG8Sxm8mMWJY3YljnYYxiY3UYsRkUYwdsMbxcezG8YxcaxZF8rjMi41Isi+Vxjys5bkWRryuOci+XTyeWpyY5+V8unlfLc5XHLyvl08nlqcpjl5Xy6eTy1OTGPKeXXyeV8mOXk8uvlfJ5McfJjreTyeTy5Ynl28p5TyY44Y6+TyxeUxxxMdfKeWbyY5Yzjr5SxyvKY52MWOtjFc7ExipXSsVysRkaGcR6cMaxcezHXGcWRrFkakXGZFkaxcaxqRnF5jU5a8tSLjOHluRZy1IuMeV8unlcakMc/J5dfK+W5yY5eU8u2HlqcmOU5Xy6+Ty15McvKeXfyeTymOHk8u/g8nkxwvKeXe8s+UvJjj5THbynli8mOOM47Xlm8sXlMcbGbHWxmxy65THKxjHWxnqOVjNjlYzjoxXGxjGcFGMMezFxcHtx1TGpCRqRrGpEkakXFkXGpCRcakanLUjWMTlqctyLI3IuMeWpy35WRuQxjyuN+WvLUi45+Dy6zlfLchjl5Wcus5WctSGOPk8O3k8rhjj4PLt5TyYmOPlLw7+UvKXkx57wzeXovLN5ZvKY895Y65d+uWOuXO8pY4WMdR36jHUcuozY4WMWO3Uc+o49RmxysYsdcY6jh1GKxgYOeM49uLEaj2O0WNRI1I01DGpCRrFjayNJI3I3FwkakI1I3GsMWcrI3I3I1jOLI3I1OW5DGJF8t+Wpy3IY5zlZy6TlZy1IuOfknLrOV8tYmOXlLy7eU8rhjj5ZvL0eWbyliY8/lnrl3vLNjFiY83XLn1y9PUc+o52JjzdcsdR36jn3HHqM2PP1GOo7dRz6jj1GLHGxz6denOvP1HOxhVHLEx6WoysetuNxqMtcq6RqNxiNxqNSNRuMxuNxuNSNcxmNxuNSNSNRI3I6RrFkakTluRuLISNYSNyOki4ki4sjUjchjMh5dJys5awxz8pjr5LyYmOVjN5dsZsLExwvLHXLv1GOoxYmPP1HLqPR1HPqOfUZsefqOXb0dOPcceoxY8/UcunfqOXUcOoxY49OfUdeo515unPpzwXBzxjHdYDu3G43yDTpGo3AWNxuNQG43G+W4o6RuNcukB0jUb5agOkadI1AdYrUakBuDUiyA0Lh5BUSxmwEqMdRzsUYrNcuo5dQHOs1x6jj3AcemK49OPQOHTFcunLpR5unLpgBxYf/2Q=="
        />
        <img
          className="person-img"
          src={imgsrc}
          alt={altname}
        />
      </div>
    </div>
  );
};

export default PersonComponent;
