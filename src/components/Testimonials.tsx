

const Testimonials = () => {
 const testimonials = [
    {
      name: 'Arun Aggarwal',
      role: 'Director Legal, IT & Consulting at vista neotech',
      content: 'Working with them was a great experience. They brought valuable insights to our project and delivered ahead of schedule.',
      image: 'https://media.licdn.com/dms/image/v2/C5603AQHgMfkQ1B6yYA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517354831801?e=1746662400&v=beta&t=aIHcubr1rX4lR00i4nAPLQCwyyYVh1X5pUt15QHL-jY',
      linkedin: 'https://www.linkedin.com/in/arun-aggarwal-8b7b3b1b/'
    },
    {
      name: 'Nrupul Dev',
      role: 'CTO @ Masai School',
      content: "An asset to any team, bringing innovative ideas and an unwavering commitment to excellence, always staying ahead of deadlines with top-tier work.",      
      image: 'https://imgs.search.brave.com/d7rIZBs5uc0P_8rmTY-Uax8Zz6s_ajMhH0BbwPBJtmk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kMmdq/cWg5ajI2dW5wMC5j/bG91ZGZyb250Lm5l/dC9wcm9maWxlcGlj/L2ZkMDdmZmYxMDI2/ZDAzOGE0OWZhYTQy/YWE3MTRiODQ2.jpeg',
      linkedin: 'https://www.linkedin.com/in/nrupuldev/'
    },
    {
      name: 'Yogesh Bhat',
      role: 'Co-Founder @ Masai School',
      content: 'A quick learner and hardworking individual who brought valuable insights to our project and consistently delivered ahead of schedule with exceptional quality.',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAQEBAVEBAVEBIbEBUVDRAQEA4SIB0iIiAdHx8kKDQsJCYxIB8ZJTMlMTMtMTAxIys0PzouNzQtOjcBCgoKDg0OFRAQFSsZFhorKy03NysrNzEtLSstLSs3KystKys3LS4tLS03NzI3NysxNy0tNzc3Kzc4ODgvOC0xK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYHAQj/xAA9EAABAwIEBAMGAwYGAwEAAAABAAIDBBEFEiExBkFRYRMicQcUMoGRoVKxwUJicoLR8CMzU5Oi4SWy8RX/xAAbAQACAwEBAQAAAAAAAAAAAAAAAgEDBAUGB//EAC0RAAICAQIEBAUFAQAAAAAAAAABAgMREiEEBTFBIjJRYQYUccHREzORobFC/9oADAMBAAIRAxEAPwCMhCFzz6OCEIQAIQhAAhCEACEIQAIQkTTNYLvcGjqUdRZzUFmTwhaFTVOPsFxGMx6u0H0VRU43Mf2y3oG+VWxqkzl3c4ohtHxGwQsvQ8RyCwktIO4DXfUK5gxiF9tSw9xp9USpkiyjmtFvfS/cnoQhVHSTT6AhCEAT6WOzQeZTNazUHqpMJu0eiRVtu30UmdPxbkAjkqKshyPIG3JXqp8UdeS3QAIR0OHb1ENCEJjaaRCEJDlAhCEACEIQAIQhAAhC8cbIARPM1jS5xsANVkp5ZamUloJ18oFzlCncS1BIbGNSTew+g+63XC2BMp4m5rF/7Z6uTuarjnuzzvMLZX2/pLyx/wBMXQ8K1DgXFpaCNw0lSm8Gnc3I+a6nDXjJkDbd7KO9gPJKr5Pcwrh4rqjnY4TBG1yotTwfLYmM2dyadnLprIBfUWT5p2q6NsiuVEDkOA1z2yGnlBDhfQ7sd0WgTftOwjKY6pgsbhryNPQqLg9UZYgXG7gbHv3+6m2OVqR1eU8Vhuib+n4JyEh8rRu4D1cAmzWxDeVn+41UYZ3HbBdZImwT5e4UozNIOvJU/v8AD/qs/wBxqU2rjO0jD/O1GGV66pPzL+SPUYi0CzPMfnYKqcSSSdSd168i5tqLnaySmxg61Sgl4QQhCC40iEISHKBCEIAEIQgAQhCABNVB0TqZqeSBZdCjqCPfYA4C3kP0cf6LpNNeSwGy5pirSaintzNh9f8AtanE8V8BuTMQBYeX4nnkEXQ1aUjzNktF1ufU27Zoo2gEgu9QnY5Wu2t8rLjzcTJdIWscHMvmzS3O9tvmuicFy+LTCVzfMXWN9rBS6lXjJTC3XktJMTp23D3gGyTTVsbyMjr37FYTiepk94eGWjFnFvkuS4bBTcFxGpZHG6UCRhNnjwwx8O1iLE3/AOlojWsZRRKx6sMveOgHUb2kaEaeoXHqh7g1oBIBJuLnXZdoxNrZ6SVoOb/DcW6/tALjNZG7IHWOUOIvY2vba6uh5WjPflPKISEIUmbLBCEIDLKOV5D3WJHmPPuno8RmbtI4fzFRpDck9ykqMIeNs4eWTRbQ8QTN3Id6tCFUoUaI+hrjzTi4rCtZ2hCELCe4BCEIAEIQgAQhCABRq+ZrG5nkNHdRMWxpkN2t88nTk31/oslW1b5XZnuJPLoPQK2FTe7ORx3NK6cwj4p/0i/p6plRNAQCAybnz5/mFsG8MipcHX817i98qwXCbx44jOzhcdnNuR+q6fTV3hssFXfmMkkciqf6ylOXVlNU8LRQEeNNmLnACNlruJ2ueS2WC1dOIhFGW+U2Ntm9lkZiJpwHahuru5VdFR+7yOdHI0lx2D7X7FSo5kssjZR2RrMXNFIHEuZK1suV5ZJd8bu6VS8OseAWSEtOw0/NQKKNr2lvku5tnAWB+Sl8KVUkcrqd99PhPUK9xwxMpr3LiPDRELDYgghYLiajbHg8NhlIcQ8EEHxM+v2/JdMq3X0HVcx9qVUGNipQbl0j5X/PQD8/oniiixpRbOdoQhWGEEmV1mk9AUpRcRfZh7myAKdCEIAEIQgDtKEIXPPo4IQhAAhCCUB0BZzGse3jhP8AE8fp/VMY7jRfeOI2Z+0fx/8ASolprq7s81zLmrea6Xt3f4AlCEK889kk4ROI54nuNmh4zEchzXR4p2m2uhGhXLStVw9iGaLIT5mf+vJZ7oZ3NfD2Y2L6rwySTxPDk8PuBe46J+jgijaAMhfbzGSnLzcHl5gpOEPDgQTyUmbBo73zi55WuqYT8W5saWMiJcKkqhfM2IA3a6OJkRHorHCKYslcXEktAFydSl0LCwAC1uydc4A3J1O60t5KdkW5fsuIcaYu+qq5HOsAxxZGBtkBP3K6xV1xZBPK3XJE8gDmQCVwt5JJJ3J1TxMtz7HiEITGcFV4pJdwb0GvqrKV4aCTsAqF7iSSeZQAlCEIAEIQgDsdLOHtB58x0KeVFR1BjdfkfiCvGuBAI1B2WBo+mW16H7HqEIUFQLMcQ4vmvDGfKPjcP2u3opvEWKeG3w2HzuHmP4G/1WSWiqvuzzvN+Y4zTW/r+AQhC0HmgQhCAPCp2An/AB2DYOuPtp97KCU9RS+G9kn4XtPyB1Sy6Dw2aNOaiSIkAp2DF5ejjcdU9jNOLh42KjUtM42sVmg0zoTTRd0eNS2tlI7lT4ZXyuGt+qgUlCdLrS4TStaLmwCschIxyPV1MBRzNOgdBID82kLhVK8uFnHW2hPJdL9pHE4ZEaWI+d4s637LVzKE2V1Kb6mfiWspIWUL0yg+vPZMVcuVpLdT6HypmsGchYnPc5BsN/VQF6SvFAAhCEACEIQB0VTKGsyaH4T/AMVDQsR9alFSWGaQG+o1CjYjWCGNzz/KPxO5BV1HWFmh1b06eipcexITyWYbxs0Hc8yphDLODzW/5Spvu+hXzSue4vcbuJuSkIQtmDwkpOTy+rBCF5dBB6vLpD32TcklgevJTgnA8Hi//wASXPzfTsmmmwPoiPRo9NUDHQMEkFRTxgnzBoB9Rp+im0FNldYjYrI8OYi2I2c8Ms64ubAg7hdBFK6VgkZr5bixGoWFrRJ56HSrlrivUe8QCwuAFU8Q8RinYQ03dbQJitrfDaS42I6nZYDE6wzPJJ8o2/qroR1MqtnoXuMzzvle6R5JcTckppz14XpFitXQwPcWx1h6p2I6fNR762Thds0fPsFIDjqWN97i3cKBVUDmajzN68x6qwBsnWycrIwmQzOoVjXUdgXt25hVyRrAAhCFAHRUIQsR9cIONVnhREj4jo1Y6OZzTdp9e6suJKrPLlGzNPnzVQtNccI+d874z5jiZJeWOy+5bU9c12jvKfspV1nlIhnc3Y6dOSsOQi5AukvPL6LyCQlgJFifyTb3aj1QMJkOo9Eg6kDovXnUHpdesHPmmIPZNiOy88Zu2pPSxXp2Q0IwBCc92YXG2w1W24Y40dBTOikBcYxaMAnzDp8uvRZV1r37Jo76i1gklWprDGhZKt5RMxrG5qh5e6zegHwj+qrm1h5t+iHBOQwga2ViSSwhW3J5Z542l8p+oXscrnAnQC+gATrl4Bt2CCMHjG21PRKYbC5+JxXhF9O+q9Gpv9PRADjRzO6W1IBSgpRI808jsRqqGePK4t6FXrVX4wyzmnq3VTNbCFchCFUSdFTVVMGMc88mk/NOqn4nnyxBvNx+w/sLJFZeD6hx9/6HD2Wei/vsZaR5JJO5JSEIWs+YN5eQCehZmcG9Sm2qdhrDcu5AWHqoJRNceQ25JiUpx5TR2TIBLTe/qnQmINk+1SwQO2XgC9cV4jsAW3Q5vXVetH5ocgBIYOi9SkhCJPCvAd/VekpDjupIZ5K63rdKYEh2rgOmpToKCBYSgUgJTSpQD8fdQcb+Jn8P6qZGo2OD4D2IKaXlE7lShCFSMdFWV4pmvKG/hb9z/YWqWJxp+aeQ/vW+miz1Lc918S26eGjBf9P/AAgoC8SmhaDwyFK1gjysA57lQaJgLtdbC6sXuuoGEOKaclvTb06IZ7Dt8z+adUenOh9SniUdwQIXl147qpJF/wB7Lw7pLHcr6L0boAUSkoKAgAKYnda6scNw2epkEVPE+aQgkNY0udYblVuIRuY5zHtLXtJD2uBa5rhuCECsXANzzJTob1QwWAHZehQSKaEsBJC0nBnDL8QkmsXCOCEyS5G55njk1jebjZMiCsbhdQIzL4MgiABLzG4NsdAfS5GvdV2Ls/wm9n/oV0TFMMZS0E1TNTGknqLRU0bppX1EsOZr3vlDjv5QNA34ttlz3F/8oD94fqnflE7lGhCFQMdFWAqXZnuPVxW9kNgT2K587c+qop7nrviiX7S+v2PAlpLQlAK48miyo2WYDsT2SnE9LrZ0fCMZijDnvD8gzWy5QbDS1lEreDJm6xvbJ0abscf0VavhnGS98PZjODKFwPY9CkPT9XTPjOWRhY7o5pBUVxOvMfdaF7FD9De8BcNYZNRe+YhUPgYyrcx9naSDKC0CwJvck+g+a12J+zfCKOT3qqrXMoHtZ4DM5Mj5DcnzAEltrHQX13015hSz/wDiJGA6NxGN31icP0W09p0+fC8AIOnupB9ckSUBv2l8CU9FHTVdC90tPO4Na0uEnmcLtLTzBAKuKT2YYfR0zJsYrTDI8fA2RjGsP4RcEuI520UuvrmRYRwy6U2jFZSOeTsGNDtfkm/blw9W1FRT1MET6iAQZLRtdIYn5iSbDkQRr2UkFTjvswgbFTyYfVGp95q2R05JYY2xlriSSBrYtd8uV1MqPZDShxpWYoDiHh5mxOYwB38t7gd/nZSsPwrE6TCMNbFCTWtxEyxwuIDgzLIS03ItcZrjfXqrA4hhmK1gpaykmoMWALQ5kha9rg0nSRp18v4goQHN+GPZ5X175msa2JsMjmSvlcQwSDdosCSVNxP2UYrDKyNsTZw4HK+OUZNBexLrWPqt5xl7zhWAsip5XeJ705k07SRIWue8lxO4JOUX7qm9ifFtVJUS0k8r54jC57S97pHQuBA3OtjfbspWQZicAxSuwauk8OIe8Ma5k0Tm+IMpsf2T/CbgrMY7iEtXVSzzW8WSQl4DcoBJ2AW14inJxzELDMXTPDQLkuN2gBYvEonMqpo3aOEjw6xBsb6qMvLRdKpKqM87tg490Bw/sFegAckoFSmioAf71Vrw9j1TQy+NSymN5bZ3la4Pb0IOhVYEsBMiGWeOY9U10vjVMhlktYXAa1o6ADQBUOLggMud73U+JvRQsZ2Z6m6aXQTuVSEIVIx0Kb4Xfwn8lz925XQnDQjsuevGp9VTV3PWfFC8VL+v2PQp+Bw56mFp2Mjb+gN1BWg4Hp89W0/hY8/p+qebxFs8xWsySOoxRA7AansnJaIaa69jYpEc7W67lLbVg7fkuUs5O3tgq8QwZ0jcjy2Rt9A5hu30KxeL8IzMuYxmHQEXaupxyCx5kb90g5CCQAT81bC+cOhRZw8J9TihpKqNroyHtjc4FzbHK5wvY/cqRWYnVSwwwSyOfFCLQsIbaMdvoF2RtIw8rj6BRp8Nh1OUb/hBV64v1RnfBY6SOVVmO1k9PBSyyF8EP+SzI0ZNLbgXPzWnwD2kYtSwthje2WNotGJYTI6McgDcG3rdaptFCRo1lxv5QE3JSZdbAdhawTfNewvyXuZmXjnGpcpJLnNqBKxwpyHMcBaw5ZbXFrcz1Wti9pGIvbm//Lh94y28YlzfsdflmUVswAHM9bX0SoqnUgEC/MNUfMy7IZcJHuz3AcexFsE9PWQx1cc0j3EPcPLmN3C1iCL6jovKDETRX92ooIA7/MLZHZ3dBcjr3Uh1QNhftayjST+U2OvO6I8VYM+FrM1STzR4jPXSQZhIHZcrmOLHm2u/Y/VUdJhjqrEHvkY9sb5ZHnYHLqbfotVVzb6fkoWHVYbKT+7ZTO+eGLHh4ZW5pcPoaWEENgjB5XYHO+pTrGx5rmNoJ2GVuihU7nO1Fz13UyOnJ1vtss0W+7NbSxsiVTYdC5xzQMeDbQxNt909UcC0M5daMxEjeN2UMPpsn6Bjy4XOlu9yr6jZls47ei1VtozWRi+xyniTgKoo2umYfHpwfM4NyvYOpHTuFgsd3YO113X2n4+KfD52380rRGzvm3/4gr57q6gyEE8mgLYp5juc+yCjLYYQhCQQ6KsFWx5ZHt6OP5oQqKurPZfE68FT+o2th7NMvvEpd/pW+4QhNd5GeWo/cRvZGMB6pnxGi1kIXPijrSERVJufMnxWhut9bckITqKKdTPZa8m1jYc+68ZXXvrbRCE+hEOTGZagciBpptum2V+nmN0IU6EK5MZFSCdCd914+Sx+LS/bRCEaURqZ7FiABNraqDXYmXPtHd55hovb5oQmUUiHJjRoKh5BOVlxsSXFWeE4K2Mlzznedr7D0QhZ5ybNEIJFiBl0G3ruptJtuhCmASZcYcy5A1BA5WVu1xDQOXM6L1C1QKJnGvbRiQfUQ07T5WR5nD992n5D7rm6ELSjm2eZghCECH//2Q==',
      linkedin: 'https://www.linkedin.com/in/yogeshbhatedutech/'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

