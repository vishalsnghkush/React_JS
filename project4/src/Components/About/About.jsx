import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://images.unsplash.com/photo-1755288556498-0aa1eb1f16f3?q=80&w=1236&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quibusdam nostrum cum
                            neque sequi cupiditate doloremque iste veniam, reiciendis quia provident praesentium
                            nulla inventore laudantium, labore, error voluptates placeat iure.
                            Voluptatum perspiciatis numquam vitae nulla accusantium ipsam fuga quod sit eum suscipit minima
                            ullam quibusdam ducimus impedit minus, consequatur quos praesentium beatae doloribus. Rem ipsum
                            , sint aliquid numquam modi totam.
                            Recusandae neque obcaecati, minima unde placeat dicta laudantium nihil architecto libero nam
                            ! Ipsum nisi necessitatibus sint, nihil voluptates architecto molestiae ab autem repudiandae accusamus
                            corrupti ullam. Tenetur cumque a provident.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
